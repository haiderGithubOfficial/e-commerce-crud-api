import express from 'express';
import mongoose from 'mongoose';

import productsRouter from './routes/Products.js';
import usersRouter from './routes/Users.js';
import authRouter from './routes/Auth.js';
import cartRouter from './routes/Cart.js';
import ordersRouter from './routes/Order.js';

//Server
const app = express();

//middlewares
app.use(express.json()); // to parse req.body

//routes
app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter);
app.use('/cart', cartRouter)
app.use('/orders', ordersRouter)

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://haider:Haiderali_560@cluster0.otwulzw.mongodb.net/e-commerce?retryWrites=true&w=majority');
    console.log('database connected')
}

app.get('/', (req, res) => {
    res.json({ status: 'success' })
})

app.listen(8080, () => {
    console.log('app started')
})
