import { Router } from "express";
import { connectDb } from "../../conf/db.js";
import User from "./model.js";
import bcrypt from "bcryptjs";

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

connectDb();

router.get("/", async (req, res) => {
    
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    const {name, email, password} = req.body;
    const encryptedPassoword = bcrypt.hashSync(password, bcryptSalt)
    try {
        const newUser = await User.create({
            name,
            email,
            password: encryptedPassoword,
        });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;