// import React from "react";
// import { IoSearch } from "react-icons/io5";

// function Search() {
//   return (
//     <div className="h-[10vh]">

//     <div className=" px-6 py-4 align-bottom">
//       <form action="">
//         <div className="flex space-x-3">
//           <label className=" border-[1px] border-gray-700 bg-slate-900 rounded-lg  flex items-center gap-2 w-[90%]">
//             <input type="text" className="grow bg-slate-900 pl-4 outline-none" placeholder="Search" />
//           </label>
//             <button>
//               <IoSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
//             </button>
//         </div>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Search;
import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="h-[10vh] px-4 sm:px-6 md:px-8 flex items-center">
      <form className="w-full">
        <div className="flex space-x-2 sm:space-x-3">
          <label className="flex items-center   flex-grow border border-gray-700 bg-slate-900 rounded-lg overflow-hidden">
            <input
              type="text"
              className="flex-grow  bg-slate-900 px-4  text-white placeholder-gray-400 outline-none"
              placeholder="Search"
            />
          </label>
          <button
            type="submit"
            className="flex-shrink-0 p-2 rounded-full hover:bg-gray-600 duration-300"
          >
            <IoSearch className="text-2xl sm:text-4xl md:text-5xl text-white" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
