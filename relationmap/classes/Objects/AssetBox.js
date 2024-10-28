export default class AssetBox {
    constructor(label, icon, position, size) {
        this.label = label;
        this.icon = icon;
        this.pos = position;
        this.size = size;
    }
    draw(ctx) {
        let lineHeight = 12;
        ctx.font = `${lineHeight}px arial`;
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.strokeText(this.label, this.pos.x, this.pos.y + this.size.h + lineHeight, this.size.w);
        ctx.stroke();
    }
}
