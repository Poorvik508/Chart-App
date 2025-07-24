import express from "express"
import { checkAuth, logi, signup, updateProfile } from "../controllers/userController.js";
import { protectRoute } from "../middelware/auth.js";
const userRouter = express.Router();
userRouter.post('/signup', signup);
userRouter.post('/login', logi)
userRouter.put('/update-profile', protectRoute, updateProfile);
userRouter.get('/check', protectRoute, checkAuth);
export default userRouter;

 

