import connection from '../models/connection';
import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  /* public async getAll(): Promise<IUser[]> {
    const products = await this.model.getAll();
    return products;
  }
 */
  public create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}

export default UserService;