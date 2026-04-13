import express from 'express';
import articlesRouter from './articles.js';
import usersRouter from './users.js';
import rootRouter from './root.js';
import authRouter from './auth.js';
import { ensureAuthenticated } from '../middlewares/authCheck.js';

const router = express.Router();

router.use('/', rootRouter);
router.use('/auth', authRouter);
router.use('/articles', articlesRouter);
router.use('/users', usersRouter); 

router.get('/protected', ensureAuthenticated, (req, res) => {
  res.send(`Ласкаво просимо в захищену зону, ${req.user.email}!`);
});

export default router;