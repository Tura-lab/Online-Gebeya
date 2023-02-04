import { Document } from 'mongoose';


export interface User extends Document {
  firsrname: string;
  lastname:string;
  email: string;
  readonly password: string;
  phoneNumber: Number;
  created: Date;
}