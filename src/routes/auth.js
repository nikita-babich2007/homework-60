import express from 'express';
import passport from 'passport';
import { setThemeHandler, registerHandler, logoutHandler } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/theme', setThemeHandler);
authRouter.post('/register', registerHandler);

authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  res.send('Ви успішно увійшли в систему!');
});

authRouter.post('/logout', logoutHandler);

export default authRouter;