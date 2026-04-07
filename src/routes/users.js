import express from 'express';
import { getUsersHandler, getUserByIdHandler, postUserHandler, putUserByIdHandler, deleteUserByIdHandler } from '../controllers/users.js';

const usersRouter = express.Router();

usersRouter.route('/').get(getUsersHandler).post(postUserHandler);
usersRouter.route('/:id').get(getUserByIdHandler).put(putUserByIdHandler).delete(deleteUserByIdHandler);

export default usersRouter;