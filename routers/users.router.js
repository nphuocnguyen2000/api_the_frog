process.env.SECRET_KEY = 'secret'
const router = require('express').Router();

let usersController = require('./../controllers/users.controller')

router.route('/').get(usersController.index);

router.route('/register').post(usersController.register);
router.route('/login').post(usersController.login);
router.route('/profile').get(usersController.profile);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;