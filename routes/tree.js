var express = require('express');
const tree_controlers= require('../controllers/tree'); 
var router = express.Router();

/* GET trees */ 
router.get('/', tree_controlers.tree_view_all_Page ); 

// GET request for one costume.
// router.get('/trees/:id', tree_controlers.tree_detail);'

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

router.get('/detail', tree_controlers.tree_view_one_Page);

/* GET create costume page */
router.get('/create', secured, tree_controlers.tree_create_Page);


/* GET create update page */
router.get('/update', secured, tree_controlers.tree_update_Page);

/* GET delete costume page */
router.get('/delete', secured, tree_controlers.tree_delete_Page);

module.exports = router;
