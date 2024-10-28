import { IAssetRender, Position, Size } from "../../interfaces.js";

export default class AssetBox implements IAssetRender{
    label:string;
    icon:string;
    pos: Position;
    size: Size;
    layer: number;
    nChildren: number;
    children: Array<AssetBox> = [];
    constructor(label:string, icon:string, position:Position, size:Size, layer:number, nChildren=0) {
        this.label = label;
        this.icon = icon;
        this.pos = position;
        this.size = size;
        this.layer = layer;
        this.nChildren = nChildren;
    }

    draw(ctx: CanvasRenderingContext2D) {
        let lineHeight = 12;
        ctx.font = `${lineHeight}px arial`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.fillText(this.label, this.pos.x, this.pos.y+this.size.h+lineHeight, this.size.w)
        ctx.stroke();
    }
    
    addChild(child:AssetBox) { this.children.push(child); }
}