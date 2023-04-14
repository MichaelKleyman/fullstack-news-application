const { articles } = require('../models');
// const articles = require('../articles');

const getAllArticles = async (req, res, next) => {
  try {
    const Articles = await articles.findAll();
    // console.log(articles);
    res.send(Articles);
  } catch (error) {
    next(error);
    // return res.status(500).send({ error: error.message });
  }
};

const getSpecificArticle = async (req, res, next) => {
  try {
    const article = await articles.findOne({
      where: { slug: req.params.articleslug },
    });

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
    next(error);
    // res.send({ error: error.message });
  }
};

const createArticle = async (req, res, next) => {
  try {
    // console.log(req.body);
    const newArticle = {
      slug: req.body.slug,
      title: req.body.title,
      content: req.body.content,
    };

    const article = await articles.create(newArticle); //filters out irrelevant fields that we do not need. Prevents vulnerable code injections.
    res.send(article);
  } catch (error) {
    next(error);
  }
};

const deleteArticle = async (req, res, next) => {
  try {
    console.log(req.params);
    await articles.destroy({ where: { slug: req.params.articleslug } });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllArticles,
  getSpecificArticle,
  createArticle,
  deleteArticle,
};
