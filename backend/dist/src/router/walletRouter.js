"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletRouter = void 0;
const express_1 = require("express");
const wallet_controller_1 = __importDefault(require("../controller/wallet-controller"));
const auth_1 = require("../middleware/auth");
exports.walletRouter = (0, express_1.Router)();
exports.walletRouter.use(auth_1.auth);
exports.walletRouter.get('/show', wallet_controller_1.default.showWallet);
exports.walletRouter.post('/create/:id', wallet_controller_1.default.createWallet);
exports.walletRouter.delete('/delete/:id', wallet_controller_1.default.deleteWallet);
exports.walletRouter.put('/edit/:id', wallet_controller_1.default.uploadWallet);
//# sourceMappingURL=walletRouter.js.map