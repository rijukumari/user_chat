import mongoose from "mongoose";
// import User from "./user.model.js";
import User from "./User.model.js";
import Message from "./message.model.js";

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;


// // import mongoose from "mongoose";

// // const conversationSchema = new mongoose.Schema(
// //   {
// //     participants: [
// //       {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: "User", // ✅ Use string name of the model
// //       },
// //     ],
// //     messages: [
// //       {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: "Message", // ✅ Use string name of the model
// //       },
// //     ],
// //   },
// //   {
// //     timestamps: true,
// //   }
// // );

// // const Conversation = mongoose.model("Conversation", conversationSchema);
// // export default Conversation;


// import mongoose from "mongoose";

// const conversationSchema = new mongoose.Schema(
//   {
//     participants: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",  // ✅ Correct string name
//       },
//     ],
//     messages: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Message",  // ✅ Correct string name
//         default: [],
//       },
//     ],
//   },
//   {
//     timestamps: true,
//   }
// );

// const Conversation = mongoose.model("Conversation", conversationSchema);
// export default Conversation;
