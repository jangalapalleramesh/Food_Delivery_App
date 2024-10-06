import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { listOrder, placeOrder, updateStatus, userOrder, verifyOrder } from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/place',authMiddleware,placeOrder);
orderRoutes.post('/verify',verifyOrder);
orderRoutes.post('/userorders',authMiddleware,userOrder);
orderRoutes.get('/list',listOrder);
orderRoutes.post('/status',updateStatus);

export default orderRoutes;