const passport = require('passport');

    router.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    router.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile'],
        })
    );

    router.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );

    router.get(
        '/auth/github',
        passport.authenticate('github', {
            scope: ['profile'],
        })
    );

    router.get(
        '/auth/github/callback',
        passport.authenticate('github'),
        (req, res) => {
            res.redirect('/dashboard');
        }
    );


module.exports = router;