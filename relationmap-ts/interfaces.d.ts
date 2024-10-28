export type AssetType = "person" | "organisation" | "computer" | "server";

export interface IAsset {
    id: string,
    type: AssetType,
    name: string,
    owns: Array<IAsset>
}

// Rendering
export interface Position {
    x:number ,
    y:number
}

export interface Size {
    w:number ,
    h:number
}

export interface IAssetRender {
    draw(ctx: CanvasRenderingContext2D)
}