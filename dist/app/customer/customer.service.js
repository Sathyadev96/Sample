"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerSchema_1 = __importDefault(require("../../model/customerSchema"));
class customerService {
    async customerCreate(req, res) {
        try {
            return await customerSchema_1.default.create(req.body.newCustomer).then(() => {
                console.log('\n Customer Created...');
                return 'Data Created.';
            }).catch((error) => {
                console.log(error);
                return error;
            });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'customerCreate' });
        }
    }
    async customerGet(req, res) {
        try {
            const mongoData = await customerSchema_1.default.find({ 'custormedId': req.body.customerId }).limit(20);
            console.log(mongoData);
            if (mongoData) {
                return mongoData;
            }
            else
                return res.send({ data: 'no data found!' });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'customerGet' });
        }
    }
    async customerUpdate(req, res) {
        try {
            return await customerSchema_1.default.findOneAndUpdate({ 'custormedId': req.body.customerId }, { $set: req.body.currData }, { upsert: true });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'customerUpdate' });
        }
    }
    async customerDelete(req, res) {
        try {
            return await customerSchema_1.default.findOneAndDelete({ custormedId: req.body.customerId });
        }
        catch (error) {
            res.send({ success: false, error: error, action: 'customerDelete' });
        }
    }
}
exports.default = customerService;
