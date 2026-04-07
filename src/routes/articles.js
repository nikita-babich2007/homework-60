import express from 'express';
import { getArticlesHandler, getArticleByIdHandler, postArticlesHandler, putArticleByIdHandler, deleteArticleByIdHandler } from '../controllers/articles.js';

const articlesRouter = express.Router();

articlesRouter.route('/').get(getArticlesHandler).post(postArticlesHandler);
articlesRouter.route('/:id').get(getArticleByIdHandler).put(putArticleByIdHandler).delete(deleteArticleByIdHandler);

export default articlesRouter;