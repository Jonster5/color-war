import { GameAssets } from "./assets";
import { Cell } from "./cell";
import {
    ColorValue,
    Raxis,
    Sprite,
    SpriteBundle,
    Texture,
    Transform,
    Vec2,
    Option,
    wrap,
} from "./raxis";

export class CreateDotSignal {
    constructor(public cell: Cell) {}
}

export class DestroyDotSignal {
    constructor(public dot: Dot) {}
}

export class TransferDotSignal {
    constructor(public dot: Dot, public newCell: Cell, public newOwner: Option<ColorValue>) {}
}

export class Dot {
    constructor(public cell: Cell, public order: number) {}
}

function updateDotPositions(r: Raxis) {
    const dots = [...r.query([Dot, Transform])];

    for (const [cell, cellTransform, cellSprite] of r.query([Cell, Transform, Sprite])) {
        const owned = dots
            .filter(([d]) => d.cell === cell)
            .sort(([{ order: a }], [{ order: b }]) => a - b);

        if (owned.length === 0) continue;
        if (owned.length === 1) {
            owned[0]?.[1].translation.set(cellTransform.translation);
            continue;
        }

        const angle = (2 * Math.PI) / owned.length;
        owned.forEach(([, t], i) => {
            t.translation.set(
                new Vec2(10, 0).rotate(angle * i - Math.PI / 2).add(cellTransform.translation)
            );
        });

        cellSprite.tint = cell.owner;
    }
}

function createDots(r: Raxis) {
    const assets = r.global(GameAssets);

    for (const { cell } of r.poll(CreateDotSignal)) {
        cell.value++;

        const newDot = new Dot(cell, cell.value);

        r.spawn(
            newDot,
            SpriteBundle({
                texture: new Texture(assets.dot.unwrap()),
                transform: new Transform({ size: new Vec2(10, 10), layer: 10 }),
            })
        );
    }
}

function transferDots(r: Raxis) {
    for (const { dot, newCell, newOwner } of r.poll(TransferDotSignal)) {
        newCell.owner = newOwner;
        newCell.value += 1;

        dot.cell = newCell;
        dot.order = newCell.value;
    }
}

function destroyDots(r: Raxis) {
    const dots = [...r.query([Dot, Raxis.Entity])];

    for (const { dot } of r.poll(DestroyDotSignal)) {
        const entity = wrap(dots.find(([d]) => d === dot)).map(([, e]) => e);

        entity.some((e) => e.destroy());
    }
}

export const DotsPlugin = new Raxis.Builder()
    .useComponent(Dot)
    .useEvent(CreateDotSignal)
    .useEvent(DestroyDotSignal)
    .useEvent(TransferDotSignal)
    .useUpdate(createDots, transferDots, destroyDots, updateDotPositions);
