module.exports = function(app, passport) {
     app.get('/signup', function(req, res) {
        res.render('signup', {
            statusMessage: req.flash('statusMessage')
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', 
        failureRedirect: '/signup',
        failureFlash: true
        }), function(req,res){
            console.log(req.flash);
    });

    app.get('/signin', function(req, res) {
        res.render('signin');
    });

    app.post('/signin', passport.authenticate('local-signin',  { 
        successRedirect: '/dashboard',
        failureRedirect: '/fail'
    }));

    app.get('/dashboard', isLoggedIn, function(req, res) {
        db.user.findOne({
            where: {
                email: req.params.email
            }
        }).then(function(result) {res.render('dashboard', {
            statusMessage: req.flash('statusMessage'), 
            result: result
        })})
    });

    app.get('/fail', function(req, res) {
        res.render('fail');
    });

    app.get('/logout', function(req, res) {
        req.session.destroy(function(err) {
            res.redirect('/');
        });
    });

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) 
            return next();
        res.redirect('/signin');
    }
 
}