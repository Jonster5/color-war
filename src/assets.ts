import { Handle, none, Option, Raxis } from "./raxis";

export class GameAssets {
    cell: Option<Handle<ImageBitmap[]>> = none;
    dot: Option<Handle<ImageBitmap[]>> = none;
    bg: Option<Handle<ImageBitmap[]>> = none;
}

export const AssetsPlugin = new Raxis.Builder().useGlobal(GameAssets);
