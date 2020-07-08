const router = require('express').Router();
let storeController = require('./../controllers/shops.controller')
router.route('/').get(storeController.index);

// router.route('/add').post(reviewController.add);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;