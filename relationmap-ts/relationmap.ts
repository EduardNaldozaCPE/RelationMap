import AssetBox from "./classes/Objects/AssetBox.js";
import { IAsset, Size } from "./interfaces.js";

interface RelationMapOptions {
    canvasSize: Size,
    defaultBoxSize: Size,
    gap: number
}

export default class RelationMap {
    canvas : HTMLCanvasElement;
    context : CanvasRenderingContext2D;
    options : RelationMapOptions;
    items : Array<Array<AssetBox>> = [[]];    // 2D Array -> Layer x Asset

    constructor(canvasElement:HTMLCanvasElement, options?:RelationMapOptions) {
        this.canvas = canvasElement;
        this.context = canvasElement.getContext('2d')!;
        if (options) {
            this.options = options;
        } else {
            this.options = { 
                canvasSize: { w: canvasElement.width, h: canvasElement.height },
                defaultBoxSize: { w: 50, h:50 },
                gap: 15
            };
        }
    }

    draw() {
        this.__arrange_items();
        if (this.items.length <= 0) return;
        for (let i=0; i < this.items.length; i++) {
            for (let j=0; j < this.items[i].length; j++) {
                this.items[i][j].draw(this.context);
            }
        }
    }

    addItem(assetDetails:IAsset, layer=0, icon="") {
        let parentAsset: AssetBox | null;
        let siblingCount = 0;
        if (layer > 0) {
            parentAsset = this.items[layer-1][this.items[layer-1].length-1];
            siblingCount = parentAsset.nChildren;
        }
            
        let newAsset = new AssetBox(
            assetDetails.name,
            icon,
            {
                x: 30 + (this.items[layer].length * this.options.gap * (this.options.defaultBoxSize.w)), 
                y: 30 + (this.options.defaultBoxSize.h * layer * this.options.gap)
            },
            this.options.defaultBoxSize,
            layer,
            assetDetails.owns?.length
        );
        this.items[layer].push(newAsset);
        console.log(`Item "${assetDetails.name}" Added. Layer ${layer}.`);

        // Add this to parent's children array if layer > 0
        if (layer > 0) {
            this.items[layer-1][this.items[layer-1].length-1].addChild(newAsset);
        };

        // Push children if owned by asset
        if (!("owns" in assetDetails)) return;
        if (assetDetails.owns.length <= 0) return;

        let nextLayer = layer+1;
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
    private __arrange_items() {
        console.log(this.items);
        let startX = 0;
        for (let asset = 0; asset < this.items[0].length; asset++) {
            let currentAsset = this.items[0][asset];
            // Calculate children's x positions
            // TODO : Make Recursive
            let offsetX = 0;
            for (let child = 0; child < currentAsset.nChildren; child++) {
                let currentChild = currentAsset.children[child];
                offsetX = child * (this.options.defaultBoxSize.w * (currentAsset.nChildren-1));
                currentChild.pos.x = (startX + offsetX)
                currentChild.pos.y = currentAsset.pos.y + this.options.defaultBoxSize.h + this.options.gap;
            }
            // Calculate own x position
            let x = 0;
            for (let child = 0; child < currentAsset.children.length; child++) {
                x += currentAsset.children[child].pos.x;
            }
            currentAsset.pos.x = x / currentAsset.nChildren;
            currentAsset.pos.y = this.options.defaultBoxSize.h + this.options.gap;
            startX += offsetX + this.options.defaultBoxSize.w * 1.5;
        }
    }

    // private __calc_childWidth(children:Array<AssetBox>): number {
    //     let addedWidth = 0;
    //     for (let child = 0; child < children.length; child++) {
    //         if (children[child].nChildren < 0)
    //             addedWidth += this.__calc_childWidth(children[child].children)
    //     }
    //     let nChildren = children.length;
    //     return addedWidth + (nChildren * (this.options.defaultBoxSize.w + this.options.gap));
    // }
}