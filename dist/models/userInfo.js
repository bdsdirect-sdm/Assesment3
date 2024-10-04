"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const Address = database_1.default.define("userAddress", {
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: true
    },
    companyAddress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    companyCity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    companyZip: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    homeAddress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    homeCity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    homeState: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    homeZip: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true
    },
    appointmentLetter: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
});
exports.default = Address;
