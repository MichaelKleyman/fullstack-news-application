const router = require('express').Router();
const articles = require('../articles');

router.get('/', (req, res) => {
  try {
    // setTimeout(() => {
    //   res.send(articles);
    // }, 2000);
    res.send(articles);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

router.get('/:articleslug', (req, res) => {
  try {
    const article = articles.find(
      (article) => article.slug === req.params.articleslug
    );

    if (!article) {
      return res.status(404).send({ error: 'Article Not Found' });
      //if you dont return^, the code will keep executing
    } else {
      // setTimeout(() => {
      //   console.log('Article found');
      //   res.status(200).send(article);
      // }, 2000);
      console.log('Article found');
      res.status(200).send(article);
    }
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
