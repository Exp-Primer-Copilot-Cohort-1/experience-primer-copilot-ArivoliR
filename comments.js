// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import controller
const commentController = require('../controllers/commentController');

// Import middleware
const auth = require('../middleware/auth');

// Create route
router.get('/:id', auth, commentController.getComments);
router.post('/:id', auth, commentController.createComment);
router.delete('/:id', auth, commentController.deleteComment);
router.put('/:id', auth, commentController.editComment);

// Export module
module.exports = router;

