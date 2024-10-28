export default class AssetBox {
    constructor(label, icon, position, size) {
        this.label = label;
        this.icon = icon;
        this.pos = position;
        this.size = size;
    }
    draw(ctx) {
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.stroke();
    }
}
