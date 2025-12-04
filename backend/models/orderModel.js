import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  userId:{type:String,required:true},
  items:{type:Array,required:true},
  amount:{type:number,required:true},
  address:{type:Object,required:true},
  status:{type:String,required:"Food Processing"},
  date:{type:Date,required:Date.now()},
  payment:{type:Boolean,required:false},
})