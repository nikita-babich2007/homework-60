import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'super_secret_key_123';

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.token; 

  if (!token) {
    return res.status(401).send('Access Denied. No token provided in cookies.');
  }

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token.');
  }
};