const router = require('express').Router();

const categoriesController = require('../controllers/categoriesController');
const resController = require('../controllers/resController');

router.route('/')
  .get(
    categoriesController.getAllCategories,
    resController.sendOkResponse,
    resController.sendErrorResponse
)

module.exports = router;
