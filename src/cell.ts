import { GameAssets } from "./assets";
import { CreateDotSignal, DestroyDotSignal, Dot, TransferDotSignal } from "./dot";
import { GameState } from "./game";
import {
    Raxis,
    SpriteBundle,
    Texture,
    Transform,
    Vec2,
    Option,
    none,
    wrap,
    Input,
    Tagged,
    Entity,
    ColorValue,
    Sprite,
    some,
} from "./raxis";
import { PointerDownEvent } from "./raxis/plugins/input/events";

export class Cell {
    owner: Option<ColorValue> = none;
    value: number = 0;
    pos: Vec2;

    constructor(pos: Vec2) {
        this.pos = pos;
    }
}

export class PopSignal {
    constructor(public cell: Cell, public entity: Entity) {}
}

export class Board {
    readonly size: number;
    private cells: Cell[][];

    constructor(size: number) {
        this.size = size;

        this.cells = Array.from({ length: size }, () => new Array(size));

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                this.cells[x][y] = new Cell(new Vec2(x, y));
            }
        }
    }

    get(pos: Vec2): Option<Cell> {
        return wrap(this.cells[pos.x]?.[pos.y]);
    }

    *all() {
        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < this.size; y++) {
                yield this.cells[x][y];
            }
        }
    }
}

function makeCells(r: Raxis) {
    const assets = r.global(GameAssets);
    const cellTexture = assets.cell.unwrap();

    const board = r.global(Board);

    for (const cell of board.all()) {
        r.spawn(
            SpriteBundle({
                texture: new Texture(cellTexture),
                transform: new Transform({
                    size: new Vec2(50, 50),
                    translation: cell.pos.mul(50),
                }),
                sprite: new Sprite({
                    tintBlend: "color-burn",
                }),
            }),
            cell
        );
    }
}

function aabbTest(p1: Vec2, s1: Vec2, p2: Vec2, s2: Vec2): boolean {
    const distance = p1.sub(p2);
    const combinedSizes = s1.div(2).add(s2.div(2));
    return (
        Math.abs(distance.x) < combinedSizes.width && Math.abs(distance.y) < combinedSizes.height
    );
}

function handleCellClick(r: Raxis) {
    if (r.noneAvailableOf(PointerDownEvent)) return;

    const state = r.global(GameState);
    if (state.popping) return;

    const { pointer } = r.global(Input);
    const ct = r.query(Transform, Tagged("camera")).single().unwrap();

    const clickPos = pointer.screenPosition.mul(ct.size.div(2)).add(ct.translation);

    const cell = wrap(
        [...r.query([Transform, Cell])].find(([t]) =>
            aabbTest(clickPos, new Vec2(0, 0), t.translation, t.size)
        )
    ).map(([, c]) => c);

    cell.some((c) => {
        if (state.isFirstRound && c.value === 0) {
            c.owner = some(state.active());
            r.dispatch(new CreateDotSignal(c));
            r.dispatch(new CreateDotSignal(c));
            r.dispatch(new CreateDotSignal(c));
            state.next();
        } else if (c.value !== 0 && c.owner.map((v) => v === state.active()).unwrapOr(false)) {
            c.owner = some(state.active());
            r.dispatch(new CreateDotSignal(c));
            state.next();
        }
    });
}

function checkMax(r: Raxis) {
    const state = r.global(GameState);

    state.popping = false;

    for (const [cell, entity] of r.query([Cell, Raxis.Entity])) {
        if (cell.value >= 4) {
            state.popping = true;
            r.dispatch(new PopSignal(cell, entity));
        }
    }
}

function setCellColor(r: Raxis) {
    for (const [cell, sprite] of r.query([Cell, Sprite])) {
        sprite.tint = cell.owner;
    }
}

function popCell(r: Raxis) {
    const board = r.global(Board);
    const dots = [...r.query(Dot)];

    for (const { cell } of r.poll(PopSignal)) {
        const owned = dots.filter((d) => d.cell === cell).sort((a, b) => a.order - b.order);
        const owner = owned[0].cell.owner;

        cell.value -= 4;

        board // 1st dot goes to cell above
            .get(cell.pos.add(0, 1))
            .some((c) => r.dispatch(new TransferDotSignal(owned[0], c, owner)))
            .none(() => r.dispatch(new DestroyDotSignal(owned[0])));

        board // 2nd dot goes to the cell to the right
            .get(cell.pos.add(1, 0))
            .some((c) => r.dispatch(new TransferDotSignal(owned[1], c, owner)))
            .none(() => r.dispatch(new DestroyDotSignal(owned[1])));

        board // 3rd dot goes to the cell below
            .get(cell.pos.add(0, -1))
            .some((c) => r.dispatch(new TransferDotSignal(owned[2], c, owner)))
            .none(() => r.dispatch(new DestroyDotSignal(owned[2])));

        board // 4th dot goes to the cell to the left
            .get(cell.pos.add(-1, 0))
            .some((c) => r.dispatch(new TransferDotSignal(owned[3], c, owner)))
            .none(() => r.dispatch(new DestroyDotSignal(owned[3])));

        // all remaining dots stay in the cell
        const rest = owned.slice(4);

        if (rest.length === 0) {
            cell.owner = none;
            cell.value = 0;
            continue;
        }

        rest.forEach((d, i) => (d.order = i + 1));
        if (rest.at(-1)?.order !== cell.value) throw new Error("Off by one!!!!!");
    }
}

export const CellPlugin = new Raxis.Builder()
    .useGlobal(Board, 7)
    .useComponent(Cell)
    .useEvent(PopSignal)
    .useStartup(makeCells)
    .useUpdate(handleCellClick, checkMax, popCell, setCellColor);
