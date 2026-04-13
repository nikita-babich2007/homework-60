import express from 'express';
import { getArticlesHandler, getArticleByIdHandler, postArticlesHandler, putArticleByIdHandler, deleteArticleByIdHandler } from '../controllers/articles.js';
import { verifyJWT } from '../middlewares/jwtAuth.js';

const articlesRouter = express.Router();

articlesRouter.use(verifyJWT);

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler);
articlesRouter.route('/:articleId').get(getArticleByIdHandler).put(putArticleByIdHandler).delete(deleteArticleByIdHandler);

export default articlesRouter;