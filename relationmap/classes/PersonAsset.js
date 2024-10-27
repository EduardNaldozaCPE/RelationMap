"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonAsset = void 0;
class PersonAsset {
    constructor(assetDetails, department) {
        this.owns = [];
        this.id = assetDetails.id;
        this.type = assetDetails.type;
        this.name = assetDetails.name;
        if (assetDetails.owns)
            this.owns = assetDetails.owns;
        this.department = department;
    }
}
exports.PersonAsset = PersonAsset;
