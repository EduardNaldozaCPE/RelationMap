import { IAsset, AssetType } from "../../interfaces.js";

export class PersonAsset implements IAsset {
    id: string;
    type: AssetType;
    name: string;
    owns: Array<IAsset> = [];

    department: string;

    constructor(assetDetails:IAsset, department:string) {
        this.id = assetDetails.id;
        this.type = assetDetails.type;
        this.name = assetDetails.name;
        if (assetDetails.owns)
            this.owns = assetDetails.owns;

        this.department = department;
    }

}