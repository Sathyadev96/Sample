"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_service_1 = __importDefault(require("./customer.service"));
class customerController {
    constructor() {
        this.customerService = new customer_service_1.default();
        this.customerCreate = async (req, res) => {
            try {
                if (!req.body.newCustomer) {
                    return res.send({ success: false, error: 'No data Found!', action: 'customerCreate' });
                }
                const mongoData = await this.customerService.customerCreate(req, res);
                return res.send({ data: mongoData });
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'customerCreate' });
            }
        };
        this.customerGet = async (req, res) => {
            try {
                if (!req.body.customerId) {
                    return res.send({ success: false, error: 'Invalid Paramater.', action: 'customerGet' });
                }
                const mongoData = await this.customerService.customerGet(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'customerGet' });
            }
        };
        this.customerUpdate = async (req, res) => {
            try {
                if (!req.body.customerId || !req.body.currData) {
                    console.log('\n *** ', req.body.customerId, req.body.currData);
                    return res.send({ success: false, error: 'Invalid parameter.', action: 'customerUpdate' });
                }
                const mongoData = await this.customerService.customerUpdate(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'customerUpdate' });
            }
        };
        this.customerDelete = async (req, res) => {
            try {
                if (!req.body.customerId) {
                    return res.send({ success: false, error: 'Invalid Params', action: 'customerDelete' });
                }
                const mongoData = await this.customerService.customerDelete(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'customerDelete' });
            }
        };
    }
}
exports.default = customerController;
