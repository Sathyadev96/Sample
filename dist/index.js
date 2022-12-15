"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = require("./config/mongo");
const purchase_controller_1 = __importDefault(require("./app/purchase/purchase.controller"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(mongo_1.dbConfigData)
    .then(() => console.log('\n Database connected...')).catch(error => console.log('\n Mongo connection error!..', error));
const Router = new purchase_controller_1.default();
app.post('/purchase/create', Router.purchaseCreate);
app.get('/purchase/get', Router.purchaseGet);
app.post('/purchase/update', Router.purchaseUpdate);
app.post('/purchase/delete', Router.purchaseDelete);
app.listen(port, () => {
    console.log(`App listening on port ${port}..`);
});
