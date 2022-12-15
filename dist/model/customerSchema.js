"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
    custormedId: { type: String, required: true, index: true },
    name: String,
    email: String,
    phoneNo: String,
    isBan: Boolean,
    profile: mongoose_1.Schema.Types.Mixed,
    extra: mongoose_1.Schema.Types.Mixed,
    other: mongoose_1.Schema.Types.Mixed,
    created_at: Date,
    updated_at: Date,
});
const customerModel = (0, mongoose_1.model)('Customer', customerSchema);
exports.default = customerModel;
