import Article from '../models/Article.js';

export const getArticlesHandler = async (req, res) => {
  try {
    const articles = await Article.find({}, 'title content'); 
    res.render('articles.ejs', { articles });
  } catch (error) {
    res.status(500).send('Помилка при отриманні статей');
  }
};

export const getArticleByIdHandler = async (req, res) => {
  try {
    const article = await Article.findById(req.params.articleId);
    if (!article) return res.status(404).send('Статтю не знайдено');
    res.render('article.ejs', { article });
  } catch (error) {
    res.status(500).send('Невірний формат ID');
  }
};

export const postArticleHandler = async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).send(`Стаття "${newArticle.title}" успішно створена!`);
  } catch (error) {
    res.status(400).send('Помилка валідації при створенні');
  }
};

export const postManyArticlesHandler = async (req, res) => {
  try {
    const result = await Article.insertMany(req.body);
    res.status(201).send(`Успішно створено ${result.length} статей!`);
  } catch (error) {
    res.status(400).send('Помилка при масовому створенні');
  }
};

export const updateOneArticleHandler = async (req, res) => {
  try {
    const result = await Article.updateOne(
      { _id: req.params.articleId }, 
      { $set: req.body }
    );
    res.send(`Оновлено документів: ${result.modifiedCount}`);
  } catch (error) {
    res.status(400).send('Помилка при оновленні');
  }
};

export const replaceOneArticleHandler = async (req, res) => {
  try {
    const result = await Article.replaceOne(
      { _id: req.params.articleId }, 
      req.body
    );
    res.send(`Замінено документів: ${result.modifiedCount}`);
  } catch (error) {
    res.status(400).send('Помилка при заміні');
  }
};

export const updateManyArticlesHandler = async (req, res) => {
  try {
    const { filter, update } = req.body;
    const result = await Article.updateMany(filter, { $set: update });
    res.send(`Масово оновлено документів: ${result.modifiedCount}`);
  } catch (error) {
    res.status(400).send('Помилка при масовому оновленні');
  }
};

export const deleteOneArticleHandler = async (req, res) => {
  try {
    const result = await Article.deleteOne({ _id: req.params.articleId });
    res.send(`Видалено документів: ${result.deletedCount}`);
  } catch (error) {
    res.status(400).send('Помилка при видаленні');
  }
};

export const deleteManyArticlesHandler = async (req, res) => {
  try {
    const { filter } = req.body;
    const result = await Article.deleteMany(filter);
    res.send(`Масово видалено документів: ${result.deletedCount}`);
  } catch (error) {
    res.status(400).send('Помилка при масовому видаленні');
  }
};