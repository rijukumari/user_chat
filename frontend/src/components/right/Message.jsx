// import React from "react";

// function Message({message}) {
//   return (
//     <div className="p-2"> 
//       <div className="chat chat-start">
//         <div className="chat-bubble chat-bubble-info">{message.message}</div>
//       </div>
//       <div className="chat chat-end">
//         <div className="chat-bubble chat-bubble-accent">
//           That's never been done in the history of the Jedi.
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;
// import React from "react";
// import  useAuth  from "../context/AuthProvider"; // assuming you have auth context

// function Message({ message }) {
//   const { authUser } = useAuth(); // current logged-in user

//   const isOwnMessage = message.senderId === authUser?._id;

//   return (
//     <div className="px-2 sm:px-4 py-1">
//       <div className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}>
//         <div
//           className={`chat-bubble ${
//             isOwnMessage ? "chat-bubble-accent" : "chat-bubble-info"
//           } break-words max-w-xs sm:max-w-sm md:max-w-md`}
//         >
//           {message.message}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Message;
import React from "react";
import useAuth from "../context/AuthProvider";

function Message({ message }) {
  const { authUser } = useAuth();

  const isOwnMessage = message.senderId === authUser?._id;

  return (
    <div className="px-2 sm:px-4 py-1">
      <div className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}>
        <div
          className={`chat-bubble ${
            isOwnMessage ? "chat-bubble-accent" : "chat-bubble-info"
          } break-words max-w-[85%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] text-sm sm:text-base`}
        >
          {message.message}
        </div>
      </div>
    </div>
  );
}

export default Message;
