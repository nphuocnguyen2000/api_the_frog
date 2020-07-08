const router = require('express').Router();
let raovatController = require('./../controllers/raovat.controller')
router.route('/').get(raovatController.index);

router.route('/add').post(raovatController.add);

// router.route('/:id').get(raovatController.findById);

router.route('/:id').delete(raovatController.deleteById);

// router.route('/update/:id').post(raovatController.updateById);

module.exports = router;