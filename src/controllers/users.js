export const getUsersHandler = (req, res) => {
  res.end('Get users route');
}

export const postUserHandler = (req, res) => {
  res.end('Post users route');
}

export const getUserByIdHandler = (req, res) => {
  const userId = req.params.id || 'unknown';
  res.end(`Get user by Id route: ${userId}`);
}

export const putUserByIdHandler = (req, res) => {
  const userId = req.params.id || 'unknown';
  res.end(`Put user by Id route: ${userId}`);
}

export const deleteUserByIdHandler = (req, res) => {
  const userId = req.params.id || 'unknown';
  res.end(`Delete user by Id route: ${userId}`);
}