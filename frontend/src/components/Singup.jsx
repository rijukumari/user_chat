// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
// import { useAuth } from "./context/AuthProvider";
// import { Link } from "react-router-dom";

// export const Singup = () => {
//   const { authUser, setAuthUser } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const password = watch("password");

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5006/user/singup",
//         {
//           name: data.name,
//           email: data.email,
//           password: data.password,
//           confirmpassword: data.confirmpassword,
//         },
//         { withCredentials: true }
//       );

//       alert("✅ Signup successful!");
//       localStorage.setItem("messenger", JSON.stringify(res.data));
//       setAuthUser(res.data);
//     } catch (err) {
//       alert(
//         "❌ Signup failed: " + (err.response?.data?.message || err.message)
//       );
//     }
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] shadow-lg px-6 sm:px-8 py-6 rounded-md bg-white space-y-4"
//       >
//         <h1 className="text-2xl text-blue-600 font-bold text-center">
//           Messenger
//         </h1>
//         <h2 className="text-xl text-center">
//           Create a new{" "}
//           <span className="text-blue-600 font-semibold">Account</span>
//         </h2>

//         {/* Username Field */}
//         <div className="relative">
//           <FaUser className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Username"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("name", { required: "Username is required" })}
//           />
//           {errors.name && (
//             <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
//           )}
//         </div>

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

//         {/* Confirm Password Field */}
//         <div className="relative">
//           <FaLock className="absolute top-3 left-3 text-gray-400" />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
//             {...register("confirmpassword", {
//               required: "Confirm Password is required",
//               validate: (value) =>
//                 value === password || "Passwords do not match",
//             })}
//           />
//           {errors.confirmpassword && (
//             <p className="text-red-600 text-sm mt-1">
//               {errors.confirmpassword.message}
//             </p>
//           )}
//         </div>

//         {/* Submit */}
//         <input
//           type="submit"
//           value="Signup"
//           className="text-white bg-blue-600 py-2 cursor-pointer w-full rounded-lg hover:bg-blue-800 transition"
//         />

//         <p className="text-center text-sm">
//           Have an account?
//           <Link to="/login" className="text-blue-600 underline ml-1">
//             Login
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };


import { useForm } from "react-hook-form";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "./context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Singup = () => {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  useEffect(() => {
    if (authUser) {
      navigate("/"); // Redirect to home/chat if already logged in
    }
  }, [authUser, navigate]);

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5006/user/singup",
        {
          name: data.name,
          email: data.email,
          password: data.password,
          confirmpassword: data.confirmpassword,
        },
        { withCredentials: true }
      );

      alert("✅ Signup successful!");
      localStorage.setItem("messenger", JSON.stringify(res.data));
      setAuthUser(res.data);
    } catch (err) {
      alert(
        "❌ Signup failed: " + (err.response?.data?.message || err.message)
      );
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[35%] shadow-lg px-6 sm:px-8 py-6 rounded-md bg-white space-y-4"
      >
        <h1 className="text-2xl text-blue-600 font-bold text-center">
          Messenger
        </h1>
        <h2 className="text-xl text-center">
          Create a new{" "}
          <span className="text-blue-600 font-semibold">Account</span>
        </h2>

        {/* Username */}
        <div className="relative">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Username"
            className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
            {...register("name", { required: "Username is required" })}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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
                message: "At least 8 chars, 1 uppercase, 1 lowercase, 1 number",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="pl-10 pr-4 py-2 border w-full rounded-md focus:outline-blue-500"
            {...register("confirmpassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmpassword && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmpassword.message}
            </p>
          )}
        </div>

        <input
          type="submit"
          value="Signup"
          className="text-white bg-blue-600 py-2 cursor-pointer w-full rounded-lg hover:bg-blue-800 transition"
        />

        <p className="text-center text-sm">
          Have an account?
          <Link to="/login" className="text-blue-600 underline ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
