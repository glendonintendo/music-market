const passport = require('passport');

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }

    next();
};

module.exports = checkNotAuthenticated;