import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
 username:{
   type:String,
   required:true,
   unique=true,
   lowercase:true,
 },
 email:{
   type:String,
   required:true,
   unique:true
 },
 password:{
   type:String,
   required:[true,"password is required"]
 }

},{timestamps:true});
export const User = mongoose.model('User', userSchema);
// this User name when will go to data base it will become plural and in lower case users

