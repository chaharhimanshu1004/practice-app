const mongoose = require('mongoose')
const RecipeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name of recipe is required"],
    },
    ingredients:[{
        type:String,
        required:true,
    }],
    instructions:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    cookingTime:{
        type:Number,
        required:true,
    },
    userOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true,
    }
});
module.exports = mongoose.model("recipes",RecipeSchema);
