// import React, { useState } from "react";
// import { BiLogOut } from "react-icons/bi";
// import Cookies from "js-cookie";
// import axios from "axios";

// function Logout() {
//   const [loading, setLoading] = useState(false);

//   const handleLogout = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post("http://localhost:5006/user/logout");
//       localStorage.removeItem("messenger");
//       Cookies.remove("jwt");
//       setLoading(false);
//       alert("✅ Logout successful!");
//     } catch (error) {
//       console.log("Error logging out:", error);
//     }

//     // Clear user data from local storage
//   };
//   return (
//     <>
//       <div className=" w-[4%]  bg-slate-950 text-white flex flex-col justify-end">
//         <div className="p-3 ">
//           <form action="">
//             <div className="flex space-x-3">
//               <button>
//                 {/* <RiLogoutCircleLine className="text-5xl pr-4 hover:bg-gray-600 rounded-full duration-300"/> */}
//                 <BiLogOut
//                   className="text-6xl pr-6 hover:bg-gray-600 rounded-lg duration-300"
//                   onClick={handleLogout}
//                 />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Logout;
// 
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import Cookies from "js-cookie";
import axios from "axios";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await axios.post("http://localhost:5006/user/logout", {}, { withCredentials: true });
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      alert("✅ Logout successful!");
      window.location.reload();
    } catch (error) {
      alert("❌ Logout failed. Try again.");
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[4%] min-w-[50px] bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-2 flex justify-center">
        <button
          onClick={handleLogout}
          disabled={loading}
          aria-label="Logout"
          className="p-2 hover:bg-gray-600 rounded-lg duration-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          title="Logout"
        >
          <BiLogOut className="text-4xl sm:text-5xl" />
        </button>
      </div>
    </div>
  );
}

export default Logout;
