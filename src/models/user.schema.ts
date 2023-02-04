import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,

  phoneNumber : Number,

  created: { type: Date, default: Date.now },
});