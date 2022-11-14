var express = require('express');
const tree_controlers= require('../controllers/tree'); 
var router = express.Router();

/* GET trees */ 
router.get('/', tree_controlers.tree_view_all_Page ); 

// GET request for one costume.
// router.get('/trees/:id', tree_controlers.tree_detail);

router.get('/detail', tree_controlers.tree_view_one_Page);
    
module.exports = router;
