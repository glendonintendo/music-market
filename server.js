const express = require('express');
const routes = require('./controllers');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

const initializePassport = require('./config/passport-config');
initializePassport(
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

const SequelizeStore = require('connect-session-sequelize')(session.Store);
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});