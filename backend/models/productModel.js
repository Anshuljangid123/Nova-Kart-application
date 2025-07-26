import mongoose, { mongo } from "mongoose";
import BestSeller from "../../frontend/src/components/BestSeller";

const productSchema = new mongoose.Schema({
    name : {type : String , required : true},
    description : {type:String , required : true},
    price : {type : number , required : true},
    image : {type : Array , required : true},
    category : {type : String , required : true},
    subCategory :  {type : String , required : true},
    sizes : {type : Array , required : true},
    bestSeller :  {type : Boolean},
    date : {type : number , required : true},
})

const productModel = mongoose.models.product ||  mongoose.Model("product" , productSchema)

export default productModel