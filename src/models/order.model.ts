import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../interfaces/order.interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const sql = `SELECT o.id,o.userId,
    json_arrayagg(p.id) AS productsIds
    FROM Trybesmith.Products AS p
    JOIN Trybesmith.Orders AS o 
    ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY userId`;
  
    const [row] = await this.connection.execute<RowDataPacket[]>(sql);
    return row as IOrder[];
  }   
}