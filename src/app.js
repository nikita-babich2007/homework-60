import express from 'express';
import 'dotenv/config';
import router from './routes/index.js';
import { logRequests } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(logRequests);

app.set('views', './src/views'); 
app.use(express.static('./public'));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});