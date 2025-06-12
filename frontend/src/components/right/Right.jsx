// import React from "react";
// import ChatUser from "./ChatUser";
// import Messages from "./Messages";
// import Type from "./Type";

// function Right() {
//   return (
//     <div className=" w-[70%]  bg-slate-950 text-white ">
//       <ChatUser />
//       <div
//         className="py-2 flex-aman overflow-y-auto"
//         style={{ maxHeight: "calc(88vh - 13vh)" }}
//       >
//         <Messages />
//       </div>
//       <Type />
//     </div>
//   );
// }

// export default Right;

import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

function Right() {
  return (
    <div className="w-full sm:w-[70%] bg-slate-950 text-white flex flex-col h-[100vh]">
      {/* Header */}
      <div className="flex-shrink-0">
        <ChatUser />
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto">
        <Messages />
      </div>

      {/* Typing Input */}
      <div className="flex-shrink-0">
        <Type />
      </div>
    </div>
  );
}

export default Right;

