import { Pool, ResultSetHeader } from 'mysql2/promise';
import NewProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  /* public async getAll(): Promise<NewProduct[]> {
    const results = await this.connection
      .execute('SELECT * TrybeSmith.Products');
    const [row] = results;
    return row as NewProduct[];
  } */

  public async create(product: NewProduct): Promise<NewProduct> {
    const { name, amount } = product;
    const results = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInsert] = results;
    const { insertId } = dataInsert;
    return { id: insertId, ...product };
  }
}