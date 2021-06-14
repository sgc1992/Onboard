const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');

router.use('/project', projectRoutes);
router.use('/users', userRoutes);
router.use('/todo', todoRoutes);

module.exports = router;