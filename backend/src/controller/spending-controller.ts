import {Request, Response} from "express";
import SpendingService from "../service/spending-service";
import spendingService from "../service/spending-service";

export class SpendingController {
    getAll = async (req: Request, res: Response) => {
        await SpendingService.findAll(req, res)
    }

    addSpending = async (req: Request, res: Response) => {
        await spendingService.addSpending(req,res)
    }

    delete = async (req:Request,res:Response)=>{
        await spendingService.deleteSpending(req,res)
    }
}

export default new SpendingController()