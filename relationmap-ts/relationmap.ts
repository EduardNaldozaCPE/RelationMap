import AssetBox from "./classes/Objects/AssetBox.js";
import { IAsset, Size } from "./interfaces.js";

interface RelationMapOptions {
    canvasSize: Size,
    defaultBoxSize: Size,
}

export default class RelationMap {
    canvas : HTMLCanvasElement
    context : CanvasRenderingContext2D
    options : RelationMapOptions
    items : Array<AssetBox> = []

    constructor(canvasElement:HTMLCanvasElement, options?:RelationMapOptions) {
        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d')!;
        if (options) {
            this.options = options;
        } else {
            this.options = { 
                canvasSize: { w: canvasElement.width, h: canvasElement.height },
                defaultBoxSize: { w: 50, h:50 }
            };
        }
    }

    draw() {
        if (this.items.length <= 0) return;
        for (let i=0; i < this.items.length; i++) {
            this.items[i].draw(this.context);
        }
    }

    addItem(assetDetails:IAsset, icon="") {
        let newAsset = new AssetBox(
            assetDetails.name,
            icon,
            {
                x: 30 + (this.options.defaultBoxSize.w * this.items.length * 1.5), 
                y: 30
            },
            this.options.defaultBoxSize
        );
        this.items.push(newAsset);
    }
}