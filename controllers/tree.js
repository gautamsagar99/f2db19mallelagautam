var tree = require('../models/tree'); 
 
// List of all trees 
exports.tree_list = async function(req, res) { 
    try{ 
        thetrees = await tree.find(); 
        res.send(thetrees); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific tree. 
exports.tree_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree detail: ' + req.params.id); 
}; 
 
// Handle tree create on POST. 
exports.tree_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tree(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.tree_species = req.body.tree_species; 
    document.tree_age = req.body.tree_age; 
    document.tree_height = req.body.tree_height; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }  
}; 
 
// Handle tree delete form on DELETE. 
exports.tree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree delete DELETE ' + req.params.id); 
}; 
 
// Handle tree update form on PUT. 
exports.tree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: tree update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.tree_view_all_Page = async function(req, res) { 
    try{ 
        thetrees = await tree.find(); 
        res.render('tree', { title: 'tree Search Results', results: thetrees }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};