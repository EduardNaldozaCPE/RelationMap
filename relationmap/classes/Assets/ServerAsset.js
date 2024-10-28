export class ServerAsset {
    constructor(assetDetails, os, version) {
        this.owns = [];
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
