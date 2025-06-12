// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { useAuth } from "./context/AuthProvider";
// import { Link } from "react-router-dom";

// function Login() {
//   const { authUser, setAuthUser } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     console.log(data);
//     try {

      


//       const res = await axios.post(
//         "http://localhost:5006/user/login",
//         {
//           email: data.email,
//           password: data.password,
//         },
//         {
//           withCredentials: true, // ✅ Very important
//         }
//       );

//       alert("✅ Login successful!");
//       console.log(res.data);
//       localStorage.setItem("messenger", JSON.stringify(res.data));
//       setAuthUser(res.data);
//     } catch (err) {
//       alert("❌ Login failed: " + (err.response?.data?.message || err.message));
//       console.error(err);
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-[35%] shadow-lg px-8 py-6 rounded-md bg-white space-y-4"
//       >
//         <h1 className="text-2xl text-blue-600 font-bold text-center">
//           Messenger
//         </h1>
//         <h2 className="text-xl text-center">
//           Create a new{" "}
//           <span className="text-blue-600 font-semibold">Account</span>
//         </h2>

//         {/* Email Field */}
//         <div className="relative">
//           <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="email"
//             placeholder="Email"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && (
//             <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
//           )}
//         </div>

//         {/* Password Field */}
//         <div className="relative">
//           <FaLock className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="password"
//             placeholder="Password"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("password", {
//               required: "Password is required",
//               pattern: {
//                 value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
//                 message: "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
//               },
//             })}
//           />
//           {errors.password && (
//             <p className="text-red-600 text-sm mt-1">
//               {errors.password.message}
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <input
//           type="submit"
//           value="Login"
//           className="text-white bg-blue-600 py-2 cursor-pointer w-full rounded-lg hover:bg-blue-800"
//         />
//         <p className="text-center text-sm">
//           Have an Account?
//           <Link to="/singup" className="text-blue-600 underline ml-1">
//             Singup
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;
// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import  {useAuth}  from "./context/AuthProvider"; // Adjust the path as necessary
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { Link } from "react-router-dom";

// function Login() {
//   const { setAuthUser } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5006/user/login",
//         {
//           email: data.email,
//           password: data.password,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       alert("✅ Login successful!");

//       // ✅ Set user context and save in localStorage
//       setAuthUser(res.data.user);
//       localStorage.setItem("messenger", JSON.stringify(res.data.user));
//     } catch (err) {
//       alert("❌ Login failed: " + (err.response?.data?.message || err.message));
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-[35%] shadow-lg px-8 py-6 rounded-md bg-white space-y-4"
//       >
//         <h1 className="text-2xl text-blue-600 font-bold text-center">Messenger</h1>
//         <h2 className="text-xl text-center">Login to your <span className="text-blue-600 font-semibold">Account</span></h2>

//         {/* Email Field */}
//         <div className="relative">
//           <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="email"
//             placeholder="Email"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("email", { required: "Email is required" })}
//           />
//           {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
//         </div>

//         {/* Password Field */}
//         <div className="relative">
//           <FaLock className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="password"
//             placeholder="Password"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("password", {
//               required: "Password is required",
//               pattern: {
//                 value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
//                 message: "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
//               },
//             })}
//           />
//           {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
//         </div>

//         <input
//           type="submit"
//           value="Login"
//           className="text-white bg-blue-600 py-2 cursor-pointer w-full rounded-lg hover:bg-blue-800"
//         />
//         <p className="text-center text-sm">
//           Don't have an account?
//           <Link to="/singup" className="text-blue-600 underline ml-1">Signup</Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "./context/AuthProvider"; // Adjust the path as necessary
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const { setAuthUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5006/user/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );

      alert("✅ Login successful!");
      setAuthUser(res.data.user);
      localStorage.setItem("messenger", JSON.stringify(res.data.user));
    } catch (err) {
      alert("❌ Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] shadow-lg px-6 sm:px-8 py-6 rounded-md bg-white space-y-4"
      >
        <h1 className="text-2xl text-blue-600 font-bold text-center">Messenger</h1>
        <h2 className="text-xl text-center">
          Login to your <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
                message:
                  "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit */}
        <input
          type="submit"
          value="Login"
          className="text-white bg-blue-600 py-2 cursor-pointer w-full rounded-lg hover:bg-blue-800 transition"
        />

        {/* Signup Redirect */}
        <p className="text-center text-sm">
          Don't have an account?
          <Link to="/singup" className="text-blue-600 underline ml-1">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
