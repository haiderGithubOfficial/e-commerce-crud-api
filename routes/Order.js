import express from 'express';
import { createOrder, fetchOrdersByUser, deleteOrder, updateOrder } from '../controller/Order.js';

const router = express.Router();

router.post('/', createOrder)
      .get('/', fetchOrdersByUser)
      .delete('/:id', deleteOrder)
      .patch('/:id', updateOrder)


export default router;
