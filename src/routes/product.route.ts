import { Router } from 'express';
import ProductController from '../controller/product.controller';

const controller = new ProductController();

const productRouter = Router();

productRouter.get('/', controller.getAll); 
productRouter.post('/', controller.create);

export default productRouter;