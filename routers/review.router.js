const router = require('express').Router();
let reviewController = require('./../controllers/review.controller')
router.route('/').get(reviewController.index);

router.route('/add').post(reviewController.add);

router.route('/:id').get(reviewController.findById);

router.route('/:id').delete(reviewController.deleteById);

router.route('/update/:id').post(reviewController.updateById);

module.exports = router;