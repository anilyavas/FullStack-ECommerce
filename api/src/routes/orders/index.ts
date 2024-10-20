import { Router } from 'express';
import {
  createOrder,
  getOrder,
  listOrders,
  updateOrder,
} from './ordersControllers.js';
import { validateData } from '../../middlewares/validationMiddleware.js';
import {
  insertOrderWithItemsSchema,
  updateOrderSchema,
} from '../../db/ordersSchema.js';
import { verifyToken } from '../../middlewares/authMiddleware.js';

const router = Router();

router.post(
  '/',
  verifyToken,
  validateData(insertOrderWithItemsSchema),
  createOrder
);

router.get('/', verifyToken, listOrders);
router.get('/', verifyToken, getOrder);
router.put('/', verifyToken, validateData(updateOrderSchema), updateOrder);

export default router;
