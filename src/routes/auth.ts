import express, { Request } from 'express';
import { AuthService } from '../services';

const router = express.Router();
const service = new AuthService();

// TODO: Create interfaces generic form request and response
interface AuthenticatedRequest extends Request {
  user?: any;
}

router.post('/login', async (req: AuthenticatedRequest, res, next) => {
  try {
    const user = req.user;
    res.json(service.signToken(user));
  } catch (error) {
    next(error);
  }
});
