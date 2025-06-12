// import React from "react";
// import Search from "./Search";
// import Users from "./Users";

// function Left() {
//   return (
//     <div className=" w-[30%]  bg-black text-white ">
//       <h1 className="font-bold text-3xl p-2 px-11">Chats</h1>
//       <Search />
//       <hr />
//       <Users />
//     </div>
//   );
// }

// export default Left;

// import React from "react";
// import Search from "./Search";
// import Users from "./Users";

// function Left() {
//   return (
//     <div className="bg-black text-white 
//       w-full sm:w-[40%] md:w-[30%] 
//       flex flex-col 
//       h-screen
//       ">
//       <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl p-2 px-4 sm:px-6 md:px-11">
//         Chats
//       </h1>
//       <Search />
//       <hr className="border-gray-700" />
//       <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-11">
//         <Users />
//       </div>
//     </div>
//   );
// }

// export default Left;

import React from "react";
import Search from "./Search";
import Users from "./Users";

function Left() {
  return (
    <div
      className="
        bg-black text-white 
        w-full        /* Mobile: full width */
        sm:w-[45%]    /* Small tablets */
        md:w-[35%]    /* Larger tablets */
        lg:w-[30%]    /* Desktop */
        flex flex-col 
        h-screen
      "
    >
      <h1
        className="
          font-bold 
          text-2xl        /* Mobile */
          sm:text-3xl     /* Small tablets */
          md:text-3xl     /* Larger tablets */
          lg:text-4xl     /* Desktop */
          p-3
          px-5
          sm:px-8
          md:px-10
          lg:px-11
        "
      >
        Chats
      </h1>

      <Search />

      <hr className="border-gray-700" />

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-11">
        <Users />
      </div>
    </div>
  );
}

export default Left;
