import { Router } from 'express';
import ProductController from '../controller/product.controller';

const controller = new ProductController();

const router = Router();

/* router.get('/', controller.getAll); */
router.post('/', controller.create);

export default router;