"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detail_1 = require("../model/detail");
class DetailService {
    constructor() {
        this.getAll = async (req, res) => {
            let idWallet = req.params.id;
            let walletDetail = await detail_1.Detail.find({ idWallet: idWallet });
            res.status(200).json(walletDetail);
        };
        this.creatDetail = async (req, res) => {
            let id = req.params.id;
            let detail = req.body;
            detail.idUser = id;
            res.status(200).json(detail);
        };
    }
}
exports.default = new DetailService();
//# sourceMappingURL=detail-service.js.map