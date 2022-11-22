import {Request, Response} from "express";
import {Wallet} from "../model/wallet";
import {Detail} from "../model/detail";

class DetailService {
    getAll = async (req: Request, res: Response) => {
        let walletDetail = await Detail.find()
        res.status(200).json(walletDetail)
    }
    creatDetail = async (req: Request, res: Response) => {
        let detail = req.body
        res.status(200).json(walletDetail)
    }
}

export default new DetailService()