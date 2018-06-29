var authController = require('../controllers/authcontroller.js');
 
module.exports = function(app, passport) {
 
    app.get('/signup', function(req, res) {
        res.render('signup');
    });

    app.get('/signin', function(req, res) {
        res.render('signin');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/success',
        failureRedirect: '/fail'
    }));

    app.post('/signin', passport.authenticate('local-signin',  { 
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

    app.get('/dashboard', isLoggedIn, function(req, res) {
        res.render('dashboard');
    });

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
            res.redirect('/signin');
        }
    }
 
}