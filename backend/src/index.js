import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./Db/Connection.js";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/message.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:4001", // 🔁 Frontend ka actual URL
    credentials: true, // ✅ Very important
  })
);
app.use("/user", userRoute);
app.use('/message', messageRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server on port Number ${PORT}`);
  ConnectDb();
});
