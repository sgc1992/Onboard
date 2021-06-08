const router = require('express').Router();
const { Project, Todos, User } = require('../models');
const withAuth = require('../utils/auth');

// render homepage
router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            layout: 'main',
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// render login/signup page
router.get('/login'), (req, res => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;