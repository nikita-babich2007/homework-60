const articlesData = [
  { id: '1', title: 'Вступ до Node.js', content: 'Node.js дозволяє писати бекенд на JavaScript.' },
  { id: '2', title: 'Що таке Express?', content: 'Це мінімалістичний фреймворк для Node.js.' }
];

export const getArticlesHandler = (req, res) => {
  res.render('articles.ejs', { articles: articlesData });
}

export const postArticlesHandler = (req, res) => {
  res.end('Post articles route');
}

export const getArticleByIdHandler = (req, res) => {
  const articleId = req.params.articleId;
  const article = articlesData.find(a => a.id === articleId);
  
  if (!article) return res.status(404).send('Not found');
  
  res.render('article.ejs', { article });
}

export const putArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Put article by Id route: ${articleId}`);
}

export const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Delete article by Id route: ${articleId}`);
}