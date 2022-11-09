const mongoose = require("mongoose") 
const treeSchema = mongoose.Schema({ 
    tree_species: String, 
    tree_age: Number, 
    tree_height: String 
}) 
 
module.exports = mongoose.model("tree", treeSchema)