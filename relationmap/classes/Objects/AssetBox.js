export default class AssetBox {
    constructor(label, icon, position, size, layer, nChildren = 0) {
        this.children = [];
        this.label = label;
        this.icon = icon;
        this.pos = position;
        this.size = size;
        this.layer = layer;
        this.nChildren = nChildren;
    }
    moveBy(pos) {
        this.pos.x += pos.x;
        this.pos.y += pos.y;
    }
    draw(ctx) {
        let lineHeight = 12;
        ctx.font = `${lineHeight}px arial`;
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.strokeRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        ctx.fillText(this.label, this.pos.x, this.pos.y + this.size.h + lineHeight, this.size.w);
        ctx.stroke();
    }
    addChild(child) { this.children.push(child); }
}
