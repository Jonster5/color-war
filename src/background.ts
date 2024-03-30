import { GameAssets } from "./assets";
import { GameState } from "./game";
import { Raxis, Sprite, SpriteBundle, Tagged, Texture, Transform, Vec2, some } from "./raxis";

function makeBackground(r: Raxis) {
    const assets = r.global(GameAssets);

    r.spawn(
        SpriteBundle({
            texture: new Texture(assets.bg.unwrap()),
            sprite: new Sprite({
                tint: some("Red"),
                tintBlend: "color-burn",
            }),
            transform: new Transform({ size: new Vec2(10000, 10000), layer: -10 }),
        })
    ).tag("bg");
}

function updateBackground(r: Raxis) {
    const state = r.global(GameState);
    const bgSprite = r.query(Sprite, Tagged("bg")).singleUnsafe();

    bgSprite.tint = some(state.active());
}

export const BackgroundPlugin = new Raxis.Builder()
    .useStartup(makeBackground)
    .useUpdate(updateBackground);
