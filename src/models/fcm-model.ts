import mongoose, { Schema, Document } from 'mongoose';

export interface IFCM extends Document {
  token: String;
}

export interface IFCMMongo extends Document {
  _id: String;
  token: String;
}

const FCMSchema: Schema = new Schema(
  {
    token: String,
  },
  { timestamps: true },
);

export default mongoose.model<IFCM>('FCM', FCMSchema);
