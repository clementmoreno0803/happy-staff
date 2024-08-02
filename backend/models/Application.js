const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
  application_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "User",
      key: 'user_id',
    },
  },
  job_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "JobOffer",
      key: 'job_id',
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'Application',
});

module.exports = Application;
