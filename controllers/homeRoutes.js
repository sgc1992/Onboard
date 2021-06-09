const router = require('express').Router();
const { Todos, User } = require('../models');
const withAuth = require('../utils/auth');

// render homepage with welcome
router.get('/', async (req, res) => {
    try {
        res.render('welcome', {
            layout: 'main',
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// render todos page
router.get('/todos', async (req, res) => {
    try {
        const todosData = await Todos.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        const todos = todosData.map((todo) => todo.get({ plain: true }));

        res.render('todos', {
            layout: 'main',
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


// render login/signup page
router.get('/login', (req, res) => {
    if(req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;