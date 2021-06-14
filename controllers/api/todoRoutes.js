const router = require('express').Router();
const { Todos } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newTodos = await Todos.create({
            title: req.body.title,
            description: req.body.description,
            user_id: req.session.user_id
        })
        res.status(200).json(newTodos)
  
    } catch (error) {
        res.status(400).json({ error: error.toString() });
    }
  });

router.delete('/delete/:id', withAuth, async (req, res) => {
    try {
        const todosData = await Todos.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!todosData) {
            res.status(404).json({ message: 'No Todos Found with this ID'});
            return;
        }

        res.status(200).json(todosData);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;