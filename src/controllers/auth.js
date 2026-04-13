import { usersDB } from '../data/users.js';

export const setThemeHandler = (req, res) => {
  const { theme } = req.body;
  if (!theme) return res.status(400).send('Theme is required');

  res.cookie('theme', theme, { maxAge: 30 * 24 * 60 * 60 * 1000 });
  res.send(`Theme saved as: ${theme}`);
};

export const registerHandler = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send('Email і пароль обов\'язкові');

  const userExists = usersDB.find(u => u.email === email);
  if (userExists) return res.status(400).send('Користувач вже існує');

  const newUser = { email, password };
  usersDB.push(newUser);

  req.login(newUser, (err) => {
    if (err) return res.status(500).send('Ошибка сервера');
    res.send('Регістрація успішна, ви увійшли в систему!');
  });
};

export const logoutHandler = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.send('Ви успішно вийшли з системи');
  });
};