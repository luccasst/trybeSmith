import { Router } from 'express';
import UserController from '../controller/user.controller';

const controller = new UserController();

const userRouter = Router();

/* productRouter.get('/', controller.getAll);  */
userRouter.post('/', controller.create);

export default userRouter;