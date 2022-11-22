import {Request, Response} from "express";
import DetailService from "../service/detail-service";

class DetailController {
    showDetail = async (req: Request, res: Response) => {
        return await DetailService.getAll(req, res)
    }
    creatDetail = async (req: Request, res: Response) => {
        return await DetailService.creatDetail(req, res)
    }
}

export default new DetailController()