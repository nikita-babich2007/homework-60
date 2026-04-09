import express from 'express';
import { getArticlesHandler, getArticleByIdHandler, postArticlesHandler, putArticleByIdHandler, deleteArticleByIdHandler } from '../controllers/articles.js';
import { checkArticleAccess } from '../middlewares/accessControl.js';

const articlesRouter = express.Router();

articlesRouter.use(checkArticleAccess);

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler);
articlesRouter.route('/:id').get(getArticleByIdHandler).put(putArticleByIdHandler).delete(deleteArticleByIdHandler);

export default articlesRouter;