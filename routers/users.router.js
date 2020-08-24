const router = require('express').Router();

let userController = require('./../controllers/users.controller')

router.route('/login')
    .post(userController.login);
router.route('/register').post(userController.register);
router.route('/register/confirm/:token').get(userController.confirm);
// router.route('/add').post(reviewController.add);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;