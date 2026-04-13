const usersData = [
  { id: '1', name: 'Нікіта', role: 'Студент' },
  { id: '2', name: 'Олександр', role: 'Викладач' }
];

export const getUsersHandler = (req, res) => {
  res.render('users.pug', { users: usersData });
}

export const postUserHandler = (req, res) => {
  res.end('Post users route');
}

export const getUserByIdHandler = (req, res) => {
  const userId = req.params.userId;
  const user = usersData.find(u => u.id === userId);
  
  if (!user) return res.status(404).send('Not found');

  res.render('user.pug', { user });
}

export const putUserByIdHandler = (req, res) => {
  const userId = req.params.id || 'unknown';
  res.end(`Put user by Id route: ${userId}`);
}

export const deleteUserByIdHandler = (req, res) => {
  const userId = req.params.id || 'unknown';
  res.end(`Delete user by Id route: ${userId}`);
}