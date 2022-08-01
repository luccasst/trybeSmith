import { Router } from 'express';
import OrderController from '../controller/order.controller';

const controller = new OrderController();

const ordertRouter = Router();

ordertRouter.get('/', controller.getAll); 

export default ordertRouter;