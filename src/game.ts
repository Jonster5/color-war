import { AssetsPlugin, GameAssets } from "./assets";
import { BackgroundPlugin } from "./background";
import { CellPlugin } from "./cell";
import { DotsPlugin } from "./dot";
import {
    Camera2d,
    Camera2dBundle,
    CanvasRenderer,
    ColorValue,
    DefaultPlugin,
    Raxis,
    Tagged,
    Transform,
    Vec2,
    load,
    some,
} from "./raxis";

export class GameState {
    players: ColorValue[] = ["Red", "Blue"];
    private currentPlayer: number = 0;

    isFirstRound: boolean = true;
    popping: boolean = false;

    points: Map<ColorValue, number> = new Map([
        ["Red", 0],
        ["Blue", 0],
    ]);

    active(): ColorValue {
        return this.players.at(this.currentPlayer % this.players.length)!;
    }

    next() {
        this.currentPlayer++;
        this.isFirstRound = this.currentPlayer < this.players.length;
    }
}

async function setup(r: Raxis) {
    const assets = r.global(GameAssets);

    const renderer = new CanvasRenderer({
        width: window.innerWidth,
        height: window.innerHeight,
        target: document.body,
    });

    assets.cell = await load(renderer, ["cell.png"]).then(some);
    assets.dot = await load(renderer, ["dot.png"]).then(some);
    assets.bg = await load(renderer, ["background.png"]).then(some);

    r.spawn(renderer).tag("renderer");
    r.spawn(
        Camera2dBundle({
            transform: new Transform({
                size: new Vec2(1000, (window.innerHeight / window.innerWidth) * 1000),
                translation: new Vec2((50 * 7) / 2, (50 * 7) / 2),
            }),
        })
    ).tag("camera");
}

function render(r: Raxis) {
    const renderer = r.query(CanvasRenderer, Tagged("renderer")).single().unwrap();
    const camera = r.query(Camera2d, Tagged("camera")).single().unwrap();

    renderer.render(camera);
}

export const Game = new Raxis.Builder()
    .useGlobal(GameState)
    .use(DefaultPlugin)
    .use(AssetsPlugin)
    .useStartup(setup)
    .use(BackgroundPlugin)
    .use(CellPlugin)
    .use(DotsPlugin)
    .useUpdate(render);
