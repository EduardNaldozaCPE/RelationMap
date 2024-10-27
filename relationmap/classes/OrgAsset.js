"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgAsset = void 0;
class OrgAsset {
    constructor(assetDetails) {
        this.owns = [];
        this.id = assetDetails.id;
        this.type = assetDetails.type;
        this.name = assetDetails.name;
        if (assetDetails.owns)
            this.owns = assetDetails.owns;
    }
}
exports.OrgAsset = OrgAsset;
