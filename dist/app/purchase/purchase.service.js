"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const purchaseSchema_1 = __importDefault(require("../../model/purchaseSchema"));
class purchaseService {
    async purchaseCreate(req, res) {
        try {
            return await purchaseSchema_1.default.create(req.body.newData).then(() => {
                return 'Data Created.';
            }).catch((error) => {
                console.log(error);
                return error;
            });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'purchaseCreate' });
        }
    }
    async purchaseGet(req, res) {
        try {
            const mongoData = await purchaseSchema_1.default.find({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }).limit(20);
            if (mongoData) {
                return mongoData;
            }
            else
                return res.send({ data: 'no data found!' });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'purchaseGet' });
        }
    }
    async purchaseUpdate(req, res) {
        try {
            return await purchaseSchema_1.default.findOneAndUpdate({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }, { $set: req.body.currData }, { upsert: true }).then(() => {
                console.log('\n Data Updated...');
                return 'Data Updated.';
            }).catch((error) => {
                console.log(error);
                return error;
            });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'purchaseUpdate' });
        }
    }
    async purchaseDelete(req, res) {
        try {
            return await purchaseSchema_1.default.findOneAndDelete({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }).then(() => {
                console.log('\n Data Deleted...');
                return 'Data Deleted.';
            }).catch((error) => {
                console.log(error);
                return error;
            });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'purchaseDelete' });
        }
    }
}
exports.default = purchaseService;
