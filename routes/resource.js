var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tree_controller = require('../controllers/tree'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/trees', tree_controller.tree_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/trees/:id', tree_controller.tree_delete); 
 
// PUT request to update Costume. 
router.put('/trees/:id', tree_controller.tree_update_put); 
 
// GET request for one Costume. 
router.get('/trees/:id', tree_controller.tree_detail); 
 
// GET request for list of all Costume items. 
router.get('/trees', tree_controller.tree_list); 
 
module.exports = router; 