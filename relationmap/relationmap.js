import AssetBox from "./classes/Objects/AssetBox.js";
export default class RelationMap {
    constructor(canvasElement, options) {
        this.items = [];
        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d');
        if (options) {
            this.options = options;
        }
        else {
            this.options = {
                canvasSize: { w: canvasElement.width, h: canvasElement.height },
                defaultBoxSize: { w: 50, h: 50 }
            };
        }
    }
    start() {
        if (this.items.length <= 0)
            return;
        for (let i = 0; i < this.items.length; i++) {
            this.items[i].draw(this.context);
        }
    }
    addItem(assetDetails, icon = "") {
        let newAsset = new AssetBox(assetDetails.name, icon, { x: 30, y: 30 }, this.options.defaultBoxSize);
        this.items.push(newAsset);
    }
}
