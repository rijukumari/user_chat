// import React from "react";
// import { useConversation } from "../../statemanage/useConversation";

// function User({user}) {
//   const {selectedConversation, setSelectedConversation} = useConversation();
//   const isSelected = selectedConversation?._id === user._id;
//   return (
//     <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-600" : ""}`} onClick={() => setSelectedConversation (user)}>
//     <div  className="flex space-x-4 px-8 py-7 hover:bg-slate-900 cursor-pointer duration-300">
//       <div className="avatar avatar-online">
//         <div className="w-14 rounded-full">
//           <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
//         </div>
//       </div>
//       <div>
//         <h1 className="font-bold text-xl text-white">{user.name}</h1>
//         <span className="text-sm">{user.email}</span>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default User;

// // import React from "react";
// // import { useConversation } from "../../statemanage/useConversation";

// // function User({ user }) {
// //   const { selectedConversation, setSelectedConversation } = useConversation();
// //   const isSelected = selectedConversation?._id === user._id;

// //   return (
// //     <div
// //       className={`cursor-pointer duration-300 ${
// //         isSelected ? "bg-slate-700" : "hover:bg-slate-600"
// //       }`}
// //       onClick={() => setSelectedConversation(user)}
// //     >
// //       <div className="flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6">
// //         <div className="avatar avatar-online">
// //           <div className="w-12 sm:w-14 rounded-full overflow-hidden">
// //             <img
// //               src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
// //               alt="User"
// //               className="w-full h-full object-cover"
// //             />
// //           </div>
// //         </div>
// //         <div className="flex flex-col">
// //           <h1 className="font-semibold text-base sm:text-lg text-white">
// //             {user.name}
// //           </h1>
// //           <span className="text-sm text-gray-300 break-all">{user.email}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default User;
// import React from "react";
// import { useConversation } from "../../statemanage/useConversation";

// function User({ user }) {
//   const { selectedConversation, setSelectedConversation } = useConversation();
//   const isSelected = selectedConversation?._id === user._id;

//   return (
//     <div
//       className={`cursor-pointer duration-300 ${
//         isSelected ? "bg-slate-700" : "hover:bg-slate-600"
//       }`}
//       onClick={() => setSelectedConversation(user)}
//     >
//       <div className="flex items-center gap-4 px-4 py-5 sm:px-6 sm:py-6">
//         <div className="avatar avatar-online">
//           <div className="w-12 sm:w-14 rounded-full overflow-hidden">
//             <img
//               src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
//               alt={user.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <h1 className="font-semibold text-base sm:text-lg text-white truncate">
//             {user.name}
//           </h1>
//           <span className="text-sm text-gray-300 break-all">{user.email}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default User;
import React from "react";
import { useConversation } from "../../statemanage/useConversation";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
    <div
      className={`cursor-pointer duration-300 ${
        isSelected ? "bg-slate-700" : "hover:bg-slate-600"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center gap-4 px-4 py-4 sm:px-6 sm:py-5 md:py-6">
        <div className="avatar avatar-online">
          <div className="w-12 sm:w-14 md:w-16 rounded-full overflow-hidden">
            <img
              src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <h1 className="font-semibold text-base sm:text-lg md:text-xl text-white truncate">
            {user.name}
          </h1>
          <span className="text-sm sm:text-base text-gray-300 break-words md:break-normal">
            {user.email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default User;
