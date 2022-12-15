import express from 'express';
import mongoose from 'mongoose';
import { dbConfigData } from './config/mongo';
import purchaseController from "./app/purchase/purchase.controller";

const port = 8000;
const app = express();
app.use(express.json());

mongoose.set('strictQuery', false);
mongoose.connect(dbConfigData)
  .then(
    () => console.log('\n Database connected...')
  ).catch(error =>
    console.log('\n Mongo connection error!..', error)
  );



const Router = new purchaseController();

app.post('/purchase/create', Router.purchaseCreate);
app.get('/purchase/get', Router.purchaseGet);
app.post('/purchase/update', Router.purchaseUpdate);
app.post('/purchase/delete', Router.purchaseDelete);

app.listen(port, () => {
  console.log(`App listening on port ${port}..`)
})