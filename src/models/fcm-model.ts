import mongoose, { Schema, Document } from 'mongoose';

export interface IFCM extends Document {
  appId: String;
  token: String;
}

export interface IFCMMongo extends Document {
  _id: String;
  appId: String;
  token: String;
}

const FCMSchema: Schema = new Schema(
  {
    appId: String,
    token: String,
  },
  { timestamps: true },
);

export default mongoose.model<IFCM>('FCM', FCMSchema);
