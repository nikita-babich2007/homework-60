import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';

const PORT = 3000;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});