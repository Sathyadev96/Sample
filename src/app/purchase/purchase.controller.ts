import purchaseService from "./purchase.service";

class purchaseController {
  public purchaseService = new purchaseService();

  public purchaseCreate = async (req: any, res: any) => {
    try {

      if (!req.body.newData) {
        return res.send({ success: false, error: 'No data Found!', action: 'purchaseCreate' })
      }
      const mongoData = await this.purchaseService.purchaseCreate(req, res);
      return res.send({ data: mongoData });
    } catch (error) {
      return res.send({ success: false, error: error, action: 'purchaseCreate' })
    }
  }

  public purchaseGet = async (req: any, res: any) => {
    try {

      if (!req.body.customerID || !req.body.invoiceID || !req.body.orderID) {
        return res.send({ success: false, error: 'Invalid Paramater.', action: 'purchaseGet' })
      }
      const mongoData = await this.purchaseService.purchaseGet(req, res);
      return res.send(mongoData);
    } catch (error) {
      return res.send({ success: false, error: error, action: 'purchaseGet' })
    }
  }

  public purchaseUpdate = async (req: any, res: any) => {
    try {

      if (!req.body.customerID || !req.body.currData || !req.body.invoiceID || !req.body.orderID) {

        return res.send({ success: false, error: 'Invalid parameter.', action: 'purchaseUpdate' })
      }
      const mongoData = await this.purchaseService.purchaseUpdate(req, res);

      return res.send(mongoData);
    } catch (error) {
      return res.send({ success: false, error: error, action: 'purchaseUpdate' })
    }
  }

  public purchaseDelete = async (req: any, res: any) => {
    try {

      if (!req.body.customerID || !req.body.invoiceID || !req.body.orderID) {
        return res.send({ success: false, error: 'Invalid Params', action: 'purchaseDelete' })
      }
      const mongoData = await this.purchaseService.purchaseDelete(req, res);
      return res.send(mongoData);
    } catch (error) {
      return res.send({ success: false, error: error, action: 'purchaseDelete' })
    }
  }

}
export default purchaseController;