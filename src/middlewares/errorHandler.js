export const errorHandler = (err, _req, res, _next) => {
  console.error('An error occurred:', err.message);
  res.status(500).send('Internal Server Error');
};