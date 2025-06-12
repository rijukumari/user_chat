import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import mongoose from "mongoose";


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    console
.log("📨 Message send karne ka request:", {
      senderId,
      receiverId,
      message,
    });

    // Input validation
    if (!message || !receiverId || message.trim().length === 0) {
      return res
        .status(400)
        .json({ message: "Message and receiver ID are required." });
    }

    // Check if conversation exists

    


    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    // Create new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message: message.trim(),
    });

    // If conversation doesn't exist, create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: [newMessage._id],
      });
    } else {
      conversation.messages.push(newMessage._id);
      await conversation.save();
    }

    return res.status(200).json({
      message: "Message sent successfully.",
      newMessage,
    });
  } catch (error) {
    console.error("❌ Error sending message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// import mongoose from "mongoose";
// import Conversation from "../models/conversation.model.js";

export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // Find the conversation between the two users
    const conversation = await Conversation.findOne({
      participants: {
        $all: [
          new mongoose.Types.ObjectId(senderId),
          new mongoose.Types.ObjectId(receiverId)
        ]
      }
    }).populate({
      path: 'messages',
      options: { sort: { createdAt: 1 } }
    });
    if (!conversation) {
      return res
        .status(200) // Changed to 200 as it's not really an error
        .json({ messages: [] }); // Return empty array if no conversation exists
    }
    return res.status(200).json({ messages: conversation.messages });
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// export const getMessages = async (req, res) => {
//   try {
//     const { id: receiverId } = req.params;
//     const senderId = req.user._id;

//     console.log("📨 Fetching messages between:", senderId, "and", receiverId);

//     // Find the conversation between the two users
//     const conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] },
//     }).populate("messages");

//     if (!conversation) {
//       return res
//         .status(404)
//         .json({ message: "No conversation found between the users." });
//     }

//     return res.status(200).json({ messages: conversation.messages });
//   } catch (error) {
//     console.error("❌ Error fetching messages:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const getMessages = async (req, res) => {
//   try {
//     const { id: conversationId } = req.params;

//     console.log("📨 Fetching messages for conversation:", conversationId);

//     const conversation = await Conversation.findById(conversationId).populate("messages");

//     if (!conversation) {
//       return res
//         .status(404)
//         .json({ message: "Conversation nahi mila." });
//     }

//     return res.status(200).json(conversation.messages);
//   } catch (error) {
//     console.error("❌ Error fetching messages:", error);
//     return res.status(500).json({ message: "Server ka error" });
//   }
// };

// export const getMessages = async (req, res) => {
//   try {
//     const { id: conversationId } = req.params;

//     console.log("📨 Conversation ID se messages fetch ho rahe hain:", conversationId);

//     const conversation = await Conversation.findById(conversationId).populate("messages");

//     if (!conversation) {
//       return res
//         .status(404)
//         .json({ message: "Conversation nahi mila." });
//     }

//     // Messages array ko direct return karo
//     return res.status(200).json(conversation.messages);
//   } catch (error) {
//     console.error("❌ Error fetching messages:", error);
//     return res.status(500).json({ message: "Server ka error" });
//   }
// };


// controller/conversation.controller.js


export const getOrCreateConversation = async (req, res) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.receiverId;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    return res.status(200).json(conversation);
  } catch (error) {
    console.error("❌ Error in getOrCreateConversation:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
