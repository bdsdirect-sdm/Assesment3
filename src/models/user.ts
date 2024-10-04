import { DataTypes } from "sequelize";
import sequelize from '../config/database';

const User = sequelize.define("user",{
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    profilePhoto: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

export default User;
