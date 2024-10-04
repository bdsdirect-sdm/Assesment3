import { Request,Response } from "express";
import User from '../models/user';
import Address from "../models/address";

//Post
export const createUser = async (
    req: Request,
    res: Response   
): Promise<void> => {
    console.log(req.body);
    const {firstName, lastName, email, profilePhoto,companyAddress, companyCity,companyState,companyZip,homeAddress,homeCity,homeState,homeZip,appointmentLetter} = req.body;
    
    try{
        console.log(req.body);
        const user:any = await User.create({firstName, lastName, email, profilePhoto,});
        const address = await Address.create({ userId:user.id,companyAddress, companyCity,companyState,companyZip,homeAddress,homeCity,homeState,homeZip,appointmentLetter});    
        res.status(201).json(user);
        res.status(201).json(address);
    }catch(error: any) {
        res.status(500).json({message: error.message});
    }
};

//Get
export const getUserById = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id); // Assuming you're using Sequelize or similar ORM

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const address = await Address.findOne({ where: { userId: id } });

        res.status(200).json({ user, address });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

//Put
export const updateUser = async (req: any, res: any): Promise<void> => {
    const { id } = req.params;
    const {
        firstName,
        lastName,
        email,
        profilePhoto,
        companyAddress,
        companyCity,
        companyState,
        companyZip,
        homeAddress,
        homeCity,
        homeState,
        homeZip,
        appointmentLetter
    } = req.body;

    try {
        // Update user data
        const [updatedRows] = await User.update(
            { firstName, lastName, email, profilePhoto },
            { where: { id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        // Update address data
        await Address.update(
            { 
                companyAddress, 
                companyCity, 
                companyState, 
                companyZip, 
                homeAddress, 
                homeCity, 
                homeState, 
                homeZip, 
                appointmentLetter 
            },
            { where: { userId: id } }
        );

        res.status(200).json({ message: "User updated successfully" });
    } catch (error: any) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};






