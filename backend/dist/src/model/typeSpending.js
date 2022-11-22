"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSpending = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    revenue: String,
    expenses: String,
});
const TypeSpending = (0, mongoose_1.model)('typeSpending', UserSchema);
exports.TypeSpending = TypeSpending;
//# sourceMappingURL=typeSpending.js.map