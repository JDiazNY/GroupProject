const Item = require('../models/item.model')



const ItemController = {

    test: (req,res) => {
        
        res.json({Vegeta:"Hello Kakarot!"})
    },

    //CREATE

    create: (req,res) => {
        Item.create(req.body)
        .then((item) => {
            res.status(201).json({item})
        })
        .catch((err) => {
            res.status(400).json({Vegeta:"Error Adding new item",error:err})
        })
        
    },

    //READ
    getAll: (req,res) => {
        Item.find({})
        .then((item) => {
            res.status(200).json({Items:item})
        })
        .catch((err) => {
            res.status(500).json({Vegeta:"Error item",error:err})
        })
        
    },
    
    getOne: (req,res) => {
        Item.find({_id:req.params.id})
        .then((item) => {
            res.status(200).json({item})
        })
        .catch((err) => {
            res.status(500).json({Vegeta:"Error item",error:err})
        }) 
    },

    //UPDATER
    updateOne: (req,res) => {
        Item.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidation:true})
        .then((item) => {
            res.status(200).json({updatedItem:item})
        })
        .catch((err) => {
            res.status(400).json({Vegeta:"Error item",error:err})
        })
    },

    //DELETE
    delete: (req,res) => {
        Item.findByIdAndDelete({_id:req.params.id})
        .then((item) => {
            res.status(200).json({deletedItem:item})
        })
        .catch((err) => {
            res.status(500).json({Vegeta:"Error Adding new item",error:err})
        })
    },
}

module.exports = ItemController