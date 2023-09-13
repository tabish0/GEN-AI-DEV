const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize.js');
const Zone = require('./zone.js');

const UploadedFile = sequelize.define('UploadedFile', {
  fileName: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Set up the relationship between Zone and UploadedFile
Zone.hasMany(UploadedFile, { foreignKey: 'zoneId' });
UploadedFile.belongsTo(Zone, { foreignKey: 'zoneId' });

module.exports = UploadedFile;