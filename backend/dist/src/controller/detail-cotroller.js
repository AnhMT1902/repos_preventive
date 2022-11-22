"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const detail_service_1 = __importDefault(require("../service/detail-service"));
class WalletController {
    constructor() {
        this.showWallet = async (req, res) => {
            return await detail_service_1.default.getAll(req, res);
        };
    }
}
exports.default = new WalletController();
//# sourceMappingURL=detail-cotroller.js.map