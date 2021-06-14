const User = require('./User');
const Project = require('./Project');
const Todos = require('./Todos');

User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Todos, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

User.hasMany(Todos, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

Todos.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project, Todos };