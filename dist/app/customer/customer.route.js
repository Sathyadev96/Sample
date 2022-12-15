"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_controller_1 = __importDefault(require("./customer.controller"));
class customerRoute {
    constructor() {
        this.customerControll = new customer_controller_1.default();
    }
}
exports.default = customerRoute;
