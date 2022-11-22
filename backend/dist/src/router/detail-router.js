"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailRouter = void 0;
const express_1 = require("express");
const detail_controller_1 = __importDefault(require("../controller/detail-controller"));
exports.DetailRouter = (0, express_1.Router)();
exports.DetailRouter.get("/wallet/:id", detail_controller_1.default.creatDetail);
exports.DetailRouter.post("/wallet/:id", detail_controller_1.default.showDetail);
//# sourceMappingURL=detail-router.js.map