"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spending_1 = require("../model/spending");
class SpendingService {
    constructor() {
        this.findAll = async (req, res) => {
            let spending = await spending_1.Spending.find();
            console.log(spending);
            return res.status(200).json(spending);
        };
        this.addSpending = async (req, res) => {
            let spending = await spending_1.Spending.create(req.body);
            await spending.save();
            return res.status(200).json(spending);
        };
        this.deleteSpending = async (req, res) => {
            let id = req.params.id;
            let spending = await spending_1.Spending.findOne({ id });
            if (spending === null) {
                return res.status(200).json({
                    message: 'Not Found'
                });
            }
            else {
                await spending.deleteOne({ _id: id });
                return res.status(200).json({
                    message: 'Delete Success'
                });
            }
        };
    }
}
exports.default = new SpendingService();
//# sourceMappingURL=spending-service.js.map