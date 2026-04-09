export const checkArticleAccess = (req, res, next) => {
  const userRole = req.headers['x-role']; 
  
  if (userRole !== 'admin') {
    return res.status(403).send('Forbidden. You do not have rights to manage articles.');
  }
  next();
};