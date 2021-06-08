const router = require('express').Router();
const { Project, Todos, User } = require('../models');
const withAuth = require('../utils/auth');

// render login/signup page
router.get('/login'), (req, res => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});