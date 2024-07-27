const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobOffer = sequelize.define('JobOffer', {
  job_id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  requirements: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
    company_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Company",
      key: 'company_id',
    },
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'JobOffer',
});

module.exports = JobOffer;
