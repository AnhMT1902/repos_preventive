import {Router} from "express";
import DetailController from "../controller/detail-controller";

export const DetailRouter = Router()
DetailRouter.get("/wallet/:id",DetailController.creatDetail);
DetailRouter.post("/wallet/:id",DetailController.showDetail);
