const router = require('express').Router();
let blogsController = require('./../controllers/blogs.controller')
router.route('/').get(blogsController.index);

// router.route('/add').post(reviewController.add);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;