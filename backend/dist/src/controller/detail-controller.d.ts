import { Request, Response } from "express";
declare class DetailController {
    showDetail: (req: Request, res: Response) => Promise<void>;
    creatDetail: (req: Request, res: Response) => Promise<void>;
}
declare const _default: DetailController;
export default _default;
