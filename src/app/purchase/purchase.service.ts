
import purchaseSchema from '../../model/purchaseSchema';

class purchaseService {

  public async purchaseCreate(req: any, res: any): Promise<any> {
    try {

      return await purchaseSchema.create(req.body.newData).then(() => {

        return 'Data Created.'
      }).catch((error) => {
        console.log(error);
        return error;
      });
    } catch (error) {
      res.send({ success: false, error: error, action: 'purchaseCreate' })
    }
  }

  public async purchaseGet(req: any, res: any): Promise<any> {
    try {

      const mongoData = await purchaseSchema.find({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }).limit(20);

      if (mongoData) {
        return mongoData;
      } else return res.send({ data: 'no data found!' })

    } catch (error) {
      res.send({ success: false, error: error, action: 'purchaseGet' })
    }
  }

  public async purchaseUpdate(req: any, res: any): Promise<any> {
    try {
      return await purchaseSchema.findOneAndUpdate({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }, { $set: req.body.currData }, { upsert: true }).then(() => {
        console.log('\n Data Updated...');
        return 'Data Updated.'
      }).catch((error) => {
        console.log(error);
        return error;
      });
    } catch (error) {
      res.send({ success: false, error: error, action: 'purchaseUpdate' })
    }
  }

  public async purchaseDelete(req: any, res: any): Promise<any> {
    try {
      return await purchaseSchema.findOneAndDelete({ 'customerID': req.body.customerID, 'invoiceID': req.body.invoiceID, 'orderID': req.body.orderID }).then(() => {
        console.log('\n Data Deleted...');
        return 'Data Deleted.'
      }).catch((error) => {
        console.log(error);
        return error;
      });
    } catch (error) {
      res.send({ success: false, error: error, action: 'purchaseDelete' })
    }
  }

}
export default purchaseService;