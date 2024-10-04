"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const address_1 = __importDefault(require("../models/address"));
//Post
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { firstName, lastName, email, profilePhoto, companyAddress, companyCity, companyState, companyZip, homeAddress, homeCity, homeState, homeZip, appointmentLetter } = req.body;
    console.log(req.body);
    try {
        const user = yield user_1.default.create({ firstName, lastName, email, profilePhoto, });
        const address = yield address_1.default.create({ userId: user.id, companyAddress, companyCity, companyState, companyZip, homeAddress, homeCity, homeState, homeZip, appointmentLetter });
        res.status(201).json(user);
        res.status(201).json(address);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.createUser = createUser;
//Get
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield user_1.default.findByPk(id); // Assuming you're using Sequelize or similar ORM
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const address = yield address_1.default.findOne({ where: { userId: id } });
        res.status(200).json({ user, address });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
//Put
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstName, lastName, email, profilePhoto, companyAddress, companyCity, companyState, companyZip, homeAddress, homeCity, homeState, homeZip, appointmentLetter } = req.body;
    try {
        // Update user data
        const [updatedRows] = yield user_1.default.update({ firstName, lastName, email, profilePhoto }, { where: { id } });
        if (updatedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }
        // Update address data
        yield address_1.default.update({
            companyAddress,
            companyCity,
            companyState,
            companyZip,
            homeAddress,
            homeCity,
            homeState,
            homeZip,
            appointmentLetter
        }, { where: { userId: id } });
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});
exports.updateUser = updateUser;
