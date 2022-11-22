import {Request, Response} from "express";
import {Wallet} from "../model/wallet";

class WalletService {
    getAllWallet = async (req: Request, res: Response) => {
        let wallet = await Wallet.find()
        res.status(200).json(wallet)
    }
    addWallet = async (req: Request, res: Response) => {
        let wallet = req.body;
        let idUser = req.params.id
        let check = await this.checkNameWallet(idUser)
        if (check) {
            wallet.idUser = idUser
            await Wallet.create(wallet);
            return res.status(201).json({
                message: "Create Wallet Success!!!"
            })
        } else {
            return res.status(201).json({
                message: "Error!!!"
            })
        }
    }
    deleteWallet = async (req: Request, res: Response) => {
        let id = req.params.id
        await Wallet.deleteOne({_id: id})
        return res.status(201).json({
            message: "Delete Success"
        })
    }
    editWallet = async (req: Request, res: Response) => {
        let id = req.params.id
        let newWallet = req.body
        await Wallet.updateMany({_id: id}, {$set: newWallet})
        return res.status(201).json({
            message: "Edit Success"
        })
    }

    findWalletByName = async (req: Request, res: Response) => {
        let walletName = req.body.name
        let arrWallet = await Wallet.find({'name': {'$regex': walletName}})
        return res.status(201).json(arrWallet)
    }


    checkNameWallet = async (idUser) => {
        let wallet = await Wallet.find({idUser: idUser})
        if (wallet.length === 0) {
            return true
        } else
            return false
    }
}
export default new WalletService();