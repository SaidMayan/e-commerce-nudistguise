const router = require('express').Router();

const authRouter = require('./authRouter');
const cartRouter = require('./cartRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');

router.use('/auth', authRouter);
router.use('/cartRouter', cartRouter);
router.use('/categoryRouter', categoryRouter);
router.use('/products', productRouter);

module.exports = router;
