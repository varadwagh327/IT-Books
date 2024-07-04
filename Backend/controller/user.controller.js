import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare passwords
        const isMatch = await bcryptjs.compare(password, user.password);

        // Check if passwords match
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If all checks pass, login successful
        res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email,
            },
        });
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
