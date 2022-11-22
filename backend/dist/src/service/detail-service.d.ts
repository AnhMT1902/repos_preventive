import { Request, Response } from "express";
declare class DetailService {
    getAll: (req: Request, res: Response) => Promise<void>;
    creatDetail: (req: Request, res: Response) => Promise<void>;
}
declare const _default: DetailService;
export default _default;
