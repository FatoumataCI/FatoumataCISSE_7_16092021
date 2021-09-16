const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const postsCtrl = require('../controllers/postsCtrl');

// posts routs
router.get('/', auth, postsCtrl.findAll);
router.post('/', auth, postsCtrl.createPost);
router.delete('/:id/', auth, postsCtrl.deletePost);

module.exports = router;