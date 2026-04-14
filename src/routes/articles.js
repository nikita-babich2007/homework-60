import express from 'express';
import { 
  getArticlesHandler, getArticleByIdHandler, 
  postArticleHandler, postManyArticlesHandler, 
  updateOneArticleHandler, replaceOneArticleHandler, updateManyArticlesHandler,
  deleteOneArticleHandler, deleteManyArticlesHandler 
} from '../controllers/articles.js';

const articlesRouter = express.Router();

// articlesRouter.use(ensureAuthenticated);

articlesRouter.route('/')
  .get(getArticlesHandler)
  .post(postArticleHandler);

articlesRouter.post('/bulk', postManyArticlesHandler);
articlesRouter.patch('/bulk', updateManyArticlesHandler);
articlesRouter.delete('/bulk', deleteManyArticlesHandler);

articlesRouter.route('/:articleId')
  .get(getArticleByIdHandler)
  .patch(updateOneArticleHandler)
  .put(replaceOneArticleHandler)  
  .delete(deleteOneArticleHandler);

export default articlesRouter;