import {Request, Response} from "express";
import {Wallet} from "../model/wallet";
import {Detail} from "../model/detail";

class DetailService {
    getAll = async (req: Request, res: Response) => {
        let idWallet = req.params.id
        let walletDetail = await Detail.find({idWallet: idWallet})
        res.status(200).json(walletDetail)
    }
    creatDetail = async (req: Request, res: Response) => {
        let id = req.params.id
        let detail = req.body
        detail.idUser = id;
        res.status(200).json(detail)
    }
}

export default new DetailService()