import mongoose, { Schema, Document } from 'mongoose';

export interface IAlternative {
  text: String;
  selectedQuantity: Number;
}

export interface IQuestion extends Document {
  appId: String;
  description: String;
  alternatives: Array<IAlternative>;
}

export interface IQuestionMongo extends Document {
  _id: String;
  appId: String;
  description: String;
  alternatives: Array<IAlternative>;
}

const AltenativeSchema: Schema = new Schema({
  text: String,
  selectedQuantity: {
    type: Number,
    default: 0,
  },
});

const QuestionSchema: Schema = new Schema(
  {
    appId: String,
    description: String,
    alternatives: [AltenativeSchema],
  },
  { timestamps: true },
);

export default mongoose.model<IQuestion>('Question', QuestionSchema);
