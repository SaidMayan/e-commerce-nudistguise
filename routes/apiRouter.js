const router = require('express').Router();

const authRouter = require('./authRouter');
const cartRouter = require('./cart');
const categoryRouter = require('./category');
const productRouter = require('./product');

router.use('/auth', authRouter);
router.use('/cart', cartRouter);
router.use('/categories', categoryRouter);
router.use('/products', productRouter);

module.exports = router;
