import express from "express"
import { protectRoute } from "../middelware/auth.js";
import { getMessages, getUsersForSidebar, markMessageAsSeen } from "../controllers/messageController.js";
const messageRouter = express.Router();
messageRouter.get('/users', protectRoute, getUsersForSidebar);
messageRouter.get('/:id', protectRoute, getMessages);
messageRouter.put('mark/:id', protectRoute, markMessageAsSeen);

export default messageRouter

