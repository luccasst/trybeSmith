import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Productservice from '../service/product.service';

class ProductController {
  constructor(private productservice = new Productservice()) { }

  public getAll = async (_req: Request, res: Response) => {
    const product = await this.productservice.getAll();
    res.status(StatusCodes.OK).json(product);
  };
 
  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productservice.create(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  };
}
export default ProductController;