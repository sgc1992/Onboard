const router = require('express').Router();
const { Todos, Project, User } = require('../models');
const withAuth = require('../utils/auth');
const redirect = require('../utils/redirect');
const home = require('../utils/home');

// render homepage with welcome
router.get('/', redirect, async (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// render todos page
router.get('/todos', redirect, async (req, res) => {
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
            todos,
            logged_in: req.session.logged_in,
            
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/calender', redirect, async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });
        const project = projectData.map((project) => project.get({ plain: true }));

        res.render('calender', {
            layout: 'main',
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// render redirect page
router.get('/redirect', withAuth, async (req, res) => {
    try {
        res.render('redirect');
    } catch (err) {
        res.status(500).json(err);
    }
})


// render login/signup page
router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
})

//render dashboard
router.get('/dashboard', redirect, async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
})

//render welcome
router.get('/welcome', redirect, async (req, res) => {
    try {
        res.render('welcome');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', home, async (req, res) => {
    try {
        res.render('signup', {
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;