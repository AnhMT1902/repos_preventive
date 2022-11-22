import {Request, Response} from "express";
import DetailService from "../service/detail-service";

class WalletController {
    showWallet = async (req: Request, res: Response) => {
        return await DetailService.getAll(req, res)
    }

}

export default new WalletController()