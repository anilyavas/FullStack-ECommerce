import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const token = req.header('Authorization');

  if (!token) {
    res.status(401).json({ error: 'Access denied' });
    return;
  }

  try {
    const decoded = jwt.verify(token, 'your-secret');
    if (typeof decoded !== 'object' || !decoded.userId) {
      res.status(401).json({ error: 'Access denied' });
      return;
    }
    req.userId = decoded.userId;
    req.role = decoded.role;
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Access denied' });
  }
}

export function verifySeller(req: Request, res: Response, next: NextFunction) {
  const role = req.role;

  if (role !== 'seller') {
    res.status(401).json({ error: 'Access denied' });
    return;
  }
  next();
}