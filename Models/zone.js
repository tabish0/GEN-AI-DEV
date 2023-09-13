const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');

const Zone = sequelize.define('Zone', {
    province: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    applicationType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    developmentModel: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zoneName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zoneCategory: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    landSize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zoneAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Zone;