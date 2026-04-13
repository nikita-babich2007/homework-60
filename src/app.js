import express from 'express';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from './config/passport.js';
import router from './routes/index.js';
import { logRequests } from './middlewares/logger.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logRequests);

app.use(session({
  secret: process.env.SESSION_SECRET || 'super_secret_session_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 3600000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', './src/views'); 
app.use(express.static('./public'));

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});