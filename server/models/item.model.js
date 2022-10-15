const mongoose = require ('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Item Name is *required"],
    },
    type:{
        type:String,
        required:[true,"Item Type is *required"],
        enum:{
            values:[
                'Shoe',
                'Clothing',
                'Accesories',
            ],
            message:'{VALUE} not an option'
        }
    },

    size:{
        type:String,
    },

    sku:{
        type:String,
        required:[true,"Item Sku # is *required"],
    },

    status:{
        type:Boolean,
        default:true
    },

    price:{
        type:Number,
        required:[true,"Item Price is *required"]
    },

    soldFor:{
        type:Number,
        default:0,
        //required:[true,"Item Selling Price is *required"]
    },


},{timestamps:true})

const item = mongoose.model("Item",ItemSchema)

module.exports = item