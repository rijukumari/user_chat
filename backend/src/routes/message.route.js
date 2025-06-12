import express from "express";
import { getMessages, getOrCreateConversation, sendMessage } from "../controller/message.controller.js";
const router = express.Router();
import secureRoute from "../middleware/secureRoute.js";

router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute, getMessages);
router.get("/conversation/:receiverId", secureRoute,getOrCreateConversation );

export default router;
