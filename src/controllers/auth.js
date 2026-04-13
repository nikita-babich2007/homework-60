import jwt from 'jsonwebtoken';

const usersDB = []; 
const SECRET = process.env.JWT_SECRET || 'super_secret_key_123';

export const setThemeHandler = (req, res) => {
  const { theme } = req.body;
  if (!theme) return res.status(400).send('Theme is required');

  res.cookie('theme', theme, { maxAge: 30 * 24 * 60 * 60 * 1000 });
  res.send(`Theme saved as: ${theme}`);
};

export const registerHandler = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Username and password required');

  const userExists = usersDB.find(u => u.username === username);
  if (userExists) return res.status(400).send('User already exists');

  usersDB.push({ username, password });

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
  res.send('User registered successfully and logged in');
};

export const loginHandler = (req, res) => {
  const { username, password } = req.body;
  const user = usersDB.find(u => u.username === username && u.password === password);

  if (!user) return res.status(401).send('Invalid credentials');

  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
  res.send('Logged in successfully');
};