import Article from '../models/Article.js';

export const getArticlesHandler = async (req, res) => {
  try {
    const articles = await Article.find();
    res.render('articles.ejs', { articles });
  } catch (error) {
    console.error('Помилка отримання статей:', error.message);
    res.status(500).send('Помилка сервера');
  }
};

export const postArticlesHandler = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = new Article({ title, content });
    await article.save();
    res.status(201).json(article);
  } catch (error) {
    console.error('Помилка створення статті:', error.message);
    res.status(500).send('Помилка сервера');
  }
}

export const getArticleByIdHandler = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const article = await Article.findById(articleId);

    if (!article) return res.status(404).send('Not found');

    res.render('article.ejs', { article });
  } catch (error) {
    console.error('Помилка отримання статті:', error.message);
    res.status(500).send('Помилка сервера');
  }
}

export const putArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Put article by Id route: ${articleId}`);
}

export const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Delete article by Id route: ${articleId}`);
}