import { IAssetRender, Position, Size } from "../../interfaces.js";

export default class AssetBox implements IAssetRender{
    label:string
    icon:string
    pos: Position
    size: Size
    constructor(label:string, icon:string, position:Position, size:Size) {
        this.label = label;
        this.icon = icon;
        this.pos = position;
        this.size = size;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.stroke();
    }
}