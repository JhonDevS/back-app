//import supabase from '../config/database/supabase';
import jwt from 'jsonwebtoken';
const secretKey = 'secret_key';

// TODO: Create interface for user
const validateToken = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export { validateToken };
