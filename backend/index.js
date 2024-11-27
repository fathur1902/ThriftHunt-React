import express from "express";
import FileUpload from "express-fileupload";
import ProductRoutes from "./routes/ProductRoutes.js"; 
// import db from "./config/Database.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(FileUpload());
app.use("/uploads",express.static("uploads"));
app.use("/api",ProductRoutes);
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
