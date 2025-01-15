import express from 'express';
import { validateToken } from '../middleware/validateToken';

const router = express.Router();

router.use(validateToken);

router.get('/', (_, res) => {
  res.send('token is valid!');
});

export { router };
