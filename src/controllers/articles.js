export const getArticlesHandler = (req, res) => {
  res.end('Get articles route');
}

export const postArticlesHandler = (req, res) => {
  res.end('Post articles route');
}

export const getArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Get article by Id route: ${articleId}`);
}

export const putArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Put article by Id route: ${articleId}`);
}

export const deleteArticleByIdHandler = (req, res) => {
  const articleId = req.params.id || 'unknown';
  res.end(`Delete article by Id route: ${articleId}`);
}