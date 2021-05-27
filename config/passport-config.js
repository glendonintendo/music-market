const LocalStrategy = require('passport-local').Strategy;

function initialize(passport) {
    const authenticateUser = (email, password, done) => {
        const user = getUserByEmail(email);
        if (user === null) {
            return done(null, false, { message: 'No user with that email' });
        }
    };

    try {
        
    } catch {

    }

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initialize;