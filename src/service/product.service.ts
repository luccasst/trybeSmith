import connection from '../models/connection';
import NewProduct from '../interfaces/product.interface';
import ProductModel from '../models/product.model';

class Productservice {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  /*  public async getAll(): Promise<NewProduct[]> {
    const products = await this.model.getAll();
    return products;
  } */

  public create(product: NewProduct): Promise<NewProduct> {
    return this.model.create(product);
  }
}

export default Productservice;