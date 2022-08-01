import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrderService from '../service/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const product = await this.orderService.getAll();
    res.status(StatusCodes.OK).json(product);
  };
}

export default OrderController;