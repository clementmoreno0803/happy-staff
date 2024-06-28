const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
    photoProfil: {
    type: DataTypes.BLOB,
    required: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  profession: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  ancienneEntreprise: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  numeroTel: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  codePostal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    required: true
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true
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
  tableName: 'Users',
});

module.exports = User;
