import { IAsset, AssetType } from "../../interfaces.js";

export class OrgAsset implements IAsset {
    id: string;
    type: AssetType;
    name: string;
    owns: Array<IAsset> = [];

    constructor(assetDetails:IAsset) {
        this.id = assetDetails.id;
        this.type = assetDetails.type;
        this.name = assetDetails.name;
        if (assetDetails.owns)
            this.owns = assetDetails.owns;
    }
}