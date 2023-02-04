import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  phoneNumber :{
    type: Number,
    required: true
  },

  created: { type: Date, default: Date.now },
});