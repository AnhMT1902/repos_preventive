"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET = "financial";
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return res.status(401).json({
                message: "Chua co Token"
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET, (err, data) => {
                if (err) {
                    return res.status(401).json({
                        message: "Chua co Token"
                    });
                }
                else {
                    req.decode = data;
                    next();
                }
            });
        }
    }
    else {
        return res.status(401).json({
            message: "Chua co Token"
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map