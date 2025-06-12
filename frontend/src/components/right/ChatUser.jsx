// import React from "react";

// function ChatUser() {
//   return (
//     <>
//     <div className=" m-5 flex space-x-4 bg-gray-800 h-[10vh] hover:bg-gray-600 duration-300 pl-5 pb-3">

//     <div>
//       <div className="avatar avatar-online">
//         <div className="w-14 rounded-full">
//           <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
//         </div>
//       </div>
//     </div>
//     <div>
//         <h1 className="text-xl">Ankit Kumar</h1>
//         <span className="text-sm">Online</span>
//     </div>

//     </div>
    
//     </>
//   );
// }

// export default ChatUser;

// import React from "react";

// function ChatUser() {
//   return (
//     <div className="m-2 sm:m-4 flex items-center gap-4 bg-gray-800 h-[10vh] hover:bg-gray-600 duration-300 px-4 rounded-lg">
//       <div className="avatar avatar-online">
//         <div className="w-12 sm:w-14 rounded-full overflow-hidden">
//           <img
//             src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
//             alt="user"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col">
//         <h1 className="text-base sm:text-lg font-semibold text-white">
//           Ankit Kumar
//         </h1>
//         <span className="text-sm text-gray-300">Online</span>
//       </div>
//     </div>
//   );
// }

// export default ChatUser;
import React from "react";

function ChatUser() {
  return (
    <div className="m-2 sm:m-4 flex items-center gap-3 sm:gap-4 bg-gray-800 h-[9vh] sm:h-[10vh] hover:bg-gray-600 duration-300 px-3 sm:px-4 rounded-xl">
      <div className="avatar avatar-online">
        <div className="w-10 sm:w-14 rounded-full overflow-hidden">
          <img
            src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <h1 className="text-sm sm:text-lg font-semibold text-white truncate">
          Ankit Kumar
        </h1>
        <span className="text-xs sm:text-sm text-gray-300">Online</span>
      </div>
    </div>
  );
}

export default ChatUser;
