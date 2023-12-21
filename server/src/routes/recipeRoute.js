const express = require('express');
const RecipeModel = require('../model/Recipe');
const router = express.Router();
router.post('/',async(req,res)=>{
    const recipe = new RecipeModel(req.body);
    try{
        const response = await recipe.save();
        res.json(response);
       
    }catch(err){
        res.json(err);
    }

});
router.get('/',async(req,res)=>{
    try{
        const response = await RecipeModel.find({});
        res.json(response);
    }catch(err){
        res.json(err);
    }
});


module.exports = router;




