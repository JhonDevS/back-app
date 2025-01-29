import jwt from 'jsonwebtoken';
import { config } from '../config/config';

class AuthService {
  // TODO: implement model form user
  signToken(user: any) {
    const payload = {
      sub: user.id,
      role: user.role
    };
    const access_token = jwt.sign(payload, config.secret, { expiresIn: '1h' });
    return {
      user,
      access_token
    };
  }
}

export default AuthService;
