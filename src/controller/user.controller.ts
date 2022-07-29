import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';
import jwt from '../utils/tokenJwt';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const token = jwt({ username });
    await this.userService.create({ username, classe, level, password });
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default UserController;