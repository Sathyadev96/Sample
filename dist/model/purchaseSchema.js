"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const purchaseDetailSchema = new mongoose_1.Schema({
    customerID: { type: String, required: true, index: true, unique: true },
    orderID: { type: String, required: true, index: true, unique: true },
    invoiceID: { type: String, required: true, index: true, unique: true },
    name: String,
    email: String,
    address: mongoose_1.Schema.Types.Mixed,
    phoneNo: Number,
    otherContact: mongoose_1.Schema.Types.Mixed,
    isActive: Boolean,
    role: String,
    extra: mongoose_1.Schema.Types.Mixed,
    other: mongoose_1.Schema.Types.Mixed,
    created_at: Date,
    updated_at: Date,
    couponInfo: mongoose_1.Schema.Types.Mixed,
    accounts: mongoose_1.Schema.Types.Mixed,
    orderInfo: mongoose_1.Schema.Types.Mixed,
    cartItems: mongoose_1.Schema.Types.Mixed,
    orderRatings: Number,
    customerSuggestion: String
});
const purchaseModel = (0, mongoose_1.model)('PurchaseDetail', purchaseDetailSchema);
exports.default = purchaseModel;
