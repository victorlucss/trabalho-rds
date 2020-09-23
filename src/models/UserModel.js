'use strict';

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(30)
        },
        password: {
            type: DataTypes.STRING(30)
        },
        name: {
            type: DataTypes.STRING(30)
        },
        type: {
            type: DataTypes.STRING(30)
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: DataTypes.NOW
        },
    });
    return User;
};