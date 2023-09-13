const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');
const Zone = require('./zone.js');

const User = sequelize.define('User', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

// Set up the relationship between User and Zone
User.hasMany(Zone, { foreignKey: 'userId' });
Zone.belongsTo(User, { foreignKey: 'userId' });

module.exports = User;