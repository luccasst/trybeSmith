import express from 'express';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';
import ordertRouter from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', ordertRouter);

export default app;
