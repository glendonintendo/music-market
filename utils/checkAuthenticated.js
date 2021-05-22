const passport = require('passport');

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/login');
};

module.exports = checkAuthenticated;