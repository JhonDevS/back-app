import supabase from '../config/database/supabase';

// TODO: Create interface for user
const validateToken = async (req: any, res: any, next: any) => {
  try {
    const athHeader = req.headers.authorization;

    if (!athHeader) {
      return res.status(401).json({ error: 'Token not provided' });
    }

    const token = athHeader.split(' ')[1];

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data) {
      return res.status(401).json({ error: 'Token invalid' });
    }

    req.user = data;

    return next();
  } catch (error) {
    return res.status(401).json({ error});
  }
};

export { validateToken };
