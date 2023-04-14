const router = require('express').Router();
const controller = require('../controllers/ArticleController');
// const articles = require('../articles');

router.get('/', controller.getAllArticles);

router.get('/:articleslug', controller.getSpecificArticle);

router.post('/', controller.createArticle);

router.delete('/:articleslug', controller.deleteArticle)

module.exports = router;
