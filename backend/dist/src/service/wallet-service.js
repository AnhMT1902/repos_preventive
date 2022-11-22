"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wallet_1 = require("../model/wallet");
class WalletService {
    constructor() {
        this.getAllWallet = async (req, res) => {
            let wallet = await wallet_1.Wallet.find();
            res.status(200).json(wallet);
        };
        this.addWallet = async (req, res) => {
            let wallet = req.body;
            let idUser = req.params.id;
            let check = await this.checkNameWallet(idUser);
            if (check) {
                wallet.idUser = idUser;
                await wallet_1.Wallet.create(wallet);
                return res.status(201).json({
                    message: "Create Wallet Success!!!"
                });
            }
            else {
                return res.status(201).json({
                    message: "Error!!!"
                });
            }
        };
        this.deleteWallet = async (req, res) => {
            let id = req.params.id;
            await wallet_1.Wallet.deleteOne({ _id: id });
            return res.status(201).json({
                message: "Delete Success"
            });
        };
        this.editWallet = async (req, res) => {
            let id = req.params.id;
            let newWallet = req.body;
            await wallet_1.Wallet.updateMany({ _id: id }, { $set: newWallet });
            return res.status(201).json({
                message: "Edit Success"
            });
        };
        this.findWalletByName = async (req, res) => {
            let walletName = req.body.name;
            let arrWallet = await wallet_1.Wallet.find({ 'name': { '$regex': walletName } });
            return res.status(201).json(arrWallet);
        };
        this.checkNameWallet = async (idUser) => {
            let wallet = await wallet_1.Wallet.find({ idUser: idUser });
            if (wallet.length === 0) {
                return true;
            }
            else
                return false;
        };
    }
}
exports.default = new WalletService();
//# sourceMappingURL=wallet-service.js.map