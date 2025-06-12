// import jwt from "jsonwebtoken";

// export const createTokenAndSaveCookie = (userId, res) => {
//   const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
//     expiresIn: "5d",
//   });

//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: false, // ✅ Development ke liye false
//     sameSite: "Lax", // ✅ lax or "none"
//   });
// };

import jwt from "jsonwebtoken";

export const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "5d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: false, // ✅ Development only
    sameSite: "Lax",
    maxAge: 5 * 24 * 60 * 60 * 1000, // ✅ Add this line
  });
};
