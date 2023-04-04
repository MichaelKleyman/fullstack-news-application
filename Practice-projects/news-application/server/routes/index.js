const router = require('express').Router();
const ArticlesRouter = require('./Articles');

router.use('/articles', ArticlesRouter);

module.exports = router;
