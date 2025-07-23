import User from "../models/User.js";

// middelware to protect routes 
export const protectRoute = async (req,res,next) => {
    try {
        const token = req.headers.token;
        const 
        const user=await User.findById()
    }
}