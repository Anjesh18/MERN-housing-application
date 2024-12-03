import mongoose from "mongoose";

const houseSchema=new mongoose.Schema({
    postedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    propertyName:{
        type:String,
        required:true
    },
    houseType:{
        type:String,
        required:true,
        enum:['flat','house','commercial','pg']
    },
    type:{
        type:String,
        required:true,
        enum:['Independent','Rental']
    },
    location:{
        required:true,
        type:String
    },
    bathrooms:{
        type:Number,
        required:false
    },
    furnished:{
        type:String,
        enum:['Fully-Furnished','Semi-Furnished','Not-Furnished'],
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    buildupArea:{
        type:String
    },
    carpetArea:{
        type:Number,
        required:false
    },
    balconies:{
        type:Number,
        required:true
    },
    tenantType:{
        type:String,
        enum:['Family', 'Bachelor', 'Company']
    },
    securityDeposit:{
        type:Number,
        required:true
    },
    bhkType:{
        type:String,
        required:true
    },
    pictures:[String]
},{
    timestamps:true
})

export const House=mongoose.model('House', houseSchema)