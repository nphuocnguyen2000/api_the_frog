const router = require('express').Router();

let accountController = require('./../controllers/account.controller')

router.route('/login').post(accountController.login);
router.route('/register').post(accountController.register);
router.route('/register/confirm/:token').get(accountController.confirm);

// router.route('/add').post(reviewController.add);

// router.route('/:id').get(reviewController.findById);

// router.route('/:id').delete(reviewController.deleteById);

// router.route('/update/:id').post(reviewController.updateById);

module.exports = router;