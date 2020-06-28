import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: String;
}

export interface ITaskMongo extends Document {
  _id: String;
  title: String;
}

const TaskSchema: Schema = new Schema({
  title: String,
});

export default mongoose.model<ITask>('Task', TaskSchema);
