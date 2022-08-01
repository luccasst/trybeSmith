import connection from '../models/connection';
import IOrder from '../interfaces/order.interfaces';
import OrderModel from '../models/order.model';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;