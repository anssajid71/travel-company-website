'use strict';
const { Model } = require('sequelize');
const  Packages= require('../models');
module.exports = {
  Packages,
};
module.exports = (sequelize, DataTypes) => {
  class Packages extends Model {
    static associate(models) {
      Packages.associate = (models) => {
        Packages.belongsTo(models.Hotels, {
          foreignKey: 'id',
          targetKey: 'id',
          as: 'hotels',
        });
        Packages.hasMany(models.Attachments, {
          foreignKey: 'attachment_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          targetKey: 'id',
          as: 'attachments',
        });
        Packages.belongsTo(models.Services, {
          foreignKey: 'package_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          targetKey: 'id',
          as: 'services',
        });
      };
    }
  }
  Packages.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      price: DataTypes.DECIMAL,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      total_days: DataTypes.INTEGER,
      type: DataTypes.STRING,
      images: DataTypes.STRING,
      available_seats: DataTypes.INTEGER,
      location: DataTypes.STRING,
      created_at: DataTypes.STRING,
      updated_at: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Packages',
    }
  );
  return Packages;
};
