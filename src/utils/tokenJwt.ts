import jwt, { SignOptions } from 'jsonwebtoken';
import 'dotenv/config';

const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET || 'Olá';

export default (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);