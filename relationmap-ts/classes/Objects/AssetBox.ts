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
        let lineHeight = 12;
        ctx.font = `${lineHeight}px arial`;
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.strokeText(this.label, this.pos.x, this.pos.y+this.size.h+lineHeight, this.size.w)
        ctx.stroke();
    }
}