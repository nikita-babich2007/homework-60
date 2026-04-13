import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { usersDB } from '../data/users.js';

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  const user = usersDB.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return done(null, false, { message: 'Невірний email або пароль' });
  }
  
  return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  const user = usersDB.find(u => u.email === email);
  done(null, user);
});

export default passport;