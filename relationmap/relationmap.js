import AssetBox from "./classes/Objects/AssetBox.js";
export default class RelationMap {
    constructor(canvasElement, options) {
        this.items = [[]]; // 2D Array -> Layer x Asset
        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d');
        if (options) {
            this.options = options;
        }
        else {
            this.options = {
                canvasSize: { w: canvasElement.width, h: canvasElement.height },
                defaultBoxSize: { w: 50, h: 50 },
                gap: 15
            };
        }
    }
    draw() {
        this.__arrange_items();
        if (this.items.length <= 0)
            return;
        for (let i = 0; i < this.items.length; i++) {
            for (let j = 0; j < this.items[i].length; j++) {
                this.items[i][j].draw(this.context);
            }
        }
    }
    addItem(assetDetails, layer = 0, icon = "") {
        var _a;
        let parentAsset;
        let siblingCount = 0;
        if (layer > 0) {
            parentAsset = this.items[layer - 1][this.items[layer - 1].length - 1];
            siblingCount = parentAsset.nChildren;
        }
        let newAsset = new AssetBox(assetDetails.name, icon, {
            x: 30 + (this.options.gap + this.options.defaultBoxSize.w) * this.items[layer].length,
            y: 30
        }, this.options.defaultBoxSize, layer, (_a = assetDetails.owns) === null || _a === void 0 ? void 0 : _a.length);
        this.items[layer].push(newAsset);
        console.log(`Item "${assetDetails.name}" Added. Layer ${layer}.`);
        // Add this to parent's children array if layer > 0
        if (layer > 0) {
            this.items[layer - 1][this.items[layer - 1].length - 1].addChild(newAsset);
        }
        ;
        // Push children if owned by asset
        if (!("owns" in assetDetails))
            return;
        if (assetDetails.owns.length <= 0)
            return;
        let nextLayer = layer + 1;
        if (nextLayer >= this.items.length)
            this.items.push([]);
        for (let i = 0; i < assetDetails.owns.length; i++) {
            let child = assetDetails.owns[i];
            this.addItem(child, nextLayer);
        }
    }
    /**
     * Only after you add all the items do you arrange their positions
     */
    __arrange_items() {
        let startPos = { x: 100, y: 200 };
        let maxDist = { w: 0, h: 0 };
        this.__spreadOut(this.items[0][0], startPos, maxDist);
    }
    __spreadOut(currentAsset, cursor, maxDist) {
        // Go down the descendant tree and spread each asset out accd to the number of siblings
        if (currentAsset.nChildren > 0) {
            cursor.y += this.options.defaultBoxSize.h + this.options.gap;
            for (let child = 0; child < currentAsset.nChildren; child++) {
                let currentChild = currentAsset.children[child];
                this.__spreadOut(currentChild, cursor, maxDist);
            }
            cursor.x = ((currentAsset.children[currentAsset.nChildren - 1].pos.x + currentAsset.children[0].pos.x) / 2);
            cursor.y -= this.options.defaultBoxSize.h + this.options.gap;
        }
        currentAsset.pos.x = cursor.x;
        currentAsset.pos.y = cursor.y;
        // Move cursor 
        if (maxDist.w > cursor.x) {
            cursor.x = maxDist.w;
        }
        else {
            cursor.x += this.options.defaultBoxSize.w + this.options.gap;
            maxDist.w = cursor.x;
        }
    }
}
