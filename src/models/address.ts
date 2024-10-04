import { DataTypes } from "sequelize";
import sequelize from '../config/database';

const Address = sequelize.define("address",{
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey:true
    },
    userId: {
        type:DataTypes.INTEGER
    },
    companyAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companyCity: {
        type: DataTypes.STRING,
        allowNull: true
    },
    companyZip: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    homeAddress: {
        type: DataTypes.STRING,
        allowNull: true
    },
    homeCity: {
        type: DataTypes.STRING,
        allowNull: true
    },
    homeState: {
        type: DataTypes.STRING,
        allowNull: true
    },
    homeZip: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    appointmentLetter: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

export default Address;

