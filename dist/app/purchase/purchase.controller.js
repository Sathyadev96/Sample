"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_service_1 = __importDefault(require("./purchase.service"));
class purchaseController {
    constructor() {
        this.purchaseService = new purchase_service_1.default();
        this.purchaseCreate = async (req, res) => {
            try {
                if (!req.body.newData) {
                    return res.send({ success: false, error: 'No data Found!', action: 'purchaseCreate' });
                }
                const mongoData = await this.purchaseService.purchaseCreate(req, res);
                return res.send({ data: mongoData });
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'purchaseCreate' });
            }
        };
        this.purchaseGet = async (req, res) => {
            try {
                if (!req.body.customerID || !req.body.invoiceID || !req.body.orderID) {
                    return res.send({ success: false, error: 'Invalid Paramater.', action: 'purchaseGet' });
                }
                const mongoData = await this.purchaseService.purchaseGet(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'purchaseGet' });
            }
        };
        this.purchaseUpdate = async (req, res) => {
            try {
                if (!req.body.customerID || !req.body.currData || !req.body.invoiceID || !req.body.orderID) {
                    return res.send({ success: false, error: 'Invalid parameter.', action: 'purchaseUpdate' });
                }
                const mongoData = await this.purchaseService.purchaseUpdate(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'purchaseUpdate' });
            }
        };
        this.purchaseDelete = async (req, res) => {
            try {
                if (!req.body.customerID || !req.body.invoiceID || !req.body.orderID) {
                    return res.send({ success: false, error: 'Invalid Params', action: 'purchaseDelete' });
                }
                const mongoData = await this.purchaseService.purchaseDelete(req, res);
                return res.send(mongoData);
            }
            catch (error) {
                return res.send({ success: false, error: error, action: 'purchaseDelete' });
            }
        };
    }
}
exports.default = purchaseController;
