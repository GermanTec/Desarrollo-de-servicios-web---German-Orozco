const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    createAt:{type:Date,default:Date.now},
});

const User= mongoose.model('User',userSchema,'User');

module.exports=User;