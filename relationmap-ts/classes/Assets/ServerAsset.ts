import { IAsset, AssetType } from "../../interfaces.js";

export class ServerAsset implements IAsset {
    id: string;
    type: AssetType;
    name: string;
    owns: Array<IAsset> = [];

    os: string;
    version: string;
    
    constructor(assetDetails:IAsset, os:string, version:string) {
        this.id = assetDetails.id;
        this.type = assetDetails.type;
        this.name = assetDetails.name;
        if (assetDetails.owns) {
            this.owns = assetDetails.owns;
        }
        
        this.os = os;
        this.version = version;
    }
} 