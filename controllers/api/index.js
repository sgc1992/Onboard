const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
const userRoutes = require('./userRoutes');

router.use('/project', projectRoutes);
router.use('/user', userRoutes);

module.exports = router;