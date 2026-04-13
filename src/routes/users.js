import express from 'express';
import { getUsersHandler, getUserByIdHandler, postUserHandler, putUserByIdHandler, deleteUserByIdHandler } from '../controllers/users.js';
import { validateUserInput } from '../middlewares/validation.js';
import { basicAuth } from '../middlewares/auth.js';

const usersRouter = express.Router();
// usersRouter.use(basicAuth);

usersRouter.route('/').get(getUsersHandler).post(validateUserInput, postUserHandler);
usersRouter.route('/:userId').get(getUserByIdHandler).put(validateUserInput, putUserByIdHandler).delete(deleteUserByIdHandler);

export default usersRouter;