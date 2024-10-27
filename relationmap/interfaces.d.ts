export type AssetType = "person" | "organisation" | "computer" | "server";

export interface IAsset {
    id: string,
    type: AssetType,
    name: string,
    owns: Array<IAsset>
}