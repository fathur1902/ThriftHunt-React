import express from "express";
import FileUpload from "express-fileupload";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import ProductRoutes from "./routes/ProductRoutes.js";
import UsersRouter from "./routes/UsersRouter.js"

dotenv.config();

const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(FileUpload());

//menampilkan gambar ke website
app.use("/uploads", express.static("uploads"));

//route
app.use("/api/users", UsersRouter);
app.use("/api", ProductRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
