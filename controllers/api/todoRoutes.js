const router = require('express').Router();
const { Todos } = require('../../models');
const withAuth = require('../../utils/auth');

route.post('/', withAuth, async (req, res) => {
    try {
        const newTodos = await Todos.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newTodos);
    } catch (err) {
        res.status(400).json(err);
    }
});

route.delete('/:id', withAuth, async (req, res) => {
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