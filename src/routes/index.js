import express from 'express';
import articlesRouter from './articles.js';
import usersRouter from './users.js';
import rootRouter from './root.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/', rootRouter);
router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/users', usersRouter); 

export default router;