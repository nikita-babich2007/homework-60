import express from 'express';
import { setThemeHandler, registerHandler, loginHandler } from '../controllers/auth.js';

const authRouter = express.Router();

authRouter.post('/theme', setThemeHandler);
authRouter.post('/register', registerHandler);
authRouter.post('/login', loginHandler);

export default authRouter;