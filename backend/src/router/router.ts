import {Router} from "express";
import {userRouter} from "./user-router";

import {walletRouter} from "./wallet-router";
export const router = Router();
router.use('',userRouter);
router.use('',walletRouter);

