
import foodModel from "../models/foodModel.js";
import fs from 'fs';

//add food item

const addFood = async (req, res) => {
    console.log('log res', req.file, req.body);
    
    let image_filename = await `${req.file.filename}`;
    
    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({success: true, message: 'Food Added'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})
    }
}

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({success: true, data: foods})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})
    }
}

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        console.log('log food remove', food);
        
        fs.unlink(`uploads/${food.image}`, () => {})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: 'Food removed'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})
        
    }
}

export {addFood, listFood, removeFood}