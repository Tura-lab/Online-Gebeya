import { Document } from 'mongoose';


export interface User extends Document {
  firstname: string;
  lastname:string;
  email: string;
  readonly password: string;
  phoneNumber: Number;
  created: Date;
}