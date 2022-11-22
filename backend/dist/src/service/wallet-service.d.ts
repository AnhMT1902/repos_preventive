import { Request, Response } from "express";
declare class WalletService {

    getAllWallet: (req: Request, res: Response) => Promise<void>;
    addWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editWallet: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findWalletByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    checkNameWallet: (idUser: any) => Promise<boolean>;

}
declare const _default: WalletService;
export default _default;
