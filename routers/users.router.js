const router = require('express').Router();

let userController = require('./../controllers/users.controller')

router.route('/add-user')
    .post(userController.add);
router.route('/register').post(userController.register);
// router.route('/add').post(reviewController.add);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;