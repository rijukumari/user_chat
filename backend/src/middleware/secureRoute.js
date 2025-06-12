import jwt from "jsonwebtoken";
import User from "../model/User.model.js"

 const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log('Token' ,token);
    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No Token Provided",
        // shouldLogout: true
      });
    }

    const verified = jwt.verify(token, process.env.JWT_TOKEN);
    if (!verified) {
      return res.status(403).json({
        message: " Invalid Token",
        // shouldLogout: true
      });
    }

    const user = await User.findById(verified.userId).select("-password");
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        // shouldLogout: true,
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error.message);

    res.status(500).json({ message: "Internal server error" });
  }
};
export default secureRoute;
