const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    tittle:{
        tpye: String,
    
    },
    snippet:{
        type: String,
    
    },
    body:{
        type: String,
    
    }
},{timestamps:true})

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog; 