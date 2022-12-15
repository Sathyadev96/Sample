import { Document, model, Schema } from 'mongoose';

const purchaseDetailSchema: Schema = new Schema({
  customerID: { type: String, required: true, index: true, unique: true },
  orderID: { type: String, required: true, index: true, unique: true },
  invoiceID: { type: String, required: true, index: true, unique: true },
  name: String,
  email: String,
  address: Schema.Types.Mixed,
  phoneNo: Number,
  otherContact: Schema.Types.Mixed,
  isActive: Boolean,
  role: String,
  extra: Schema.Types.Mixed,
  other: Schema.Types.Mixed,
  created_at: Date,
  updated_at: Date,
  couponInfo: Schema.Types.Mixed,
  accounts: Schema.Types.Mixed,
  orderInfo: Schema.Types.Mixed,
  cartItems: Schema.Types.Mixed,
  orderRatings: Number,
  customerSuggestion: String
});

const purchaseModel = model<Document>('PurchaseDetail', purchaseDetailSchema);
export default purchaseModel;
