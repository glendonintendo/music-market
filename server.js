const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
// const passport = require('passport');
// const flash = require('express-flash');

const app = express();
const PORT = process.env.PORT || 3001;

// const intializePassport = require('./config/passport-config');
// const { application } = require('express');
// intializePassport(passport);

// app.use(flash());
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 900000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize
  })
}; 

app.use(session(sess));

// app.use(passport.initalize());
// app.use(passport.session());

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});