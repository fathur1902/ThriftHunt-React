import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UsersModels.js";

// Fungsi untuk registrasi pengguna baru atau admin
export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  // if (password !== confirmPassword) {
  //   return res.status(400).json({ message: "Passwords do not match" });
  // }
  // if (!name || !email || !password || !confirmPassword) {
  //   return res.status(400).json({ message: 'Semua field harus diisi' });
  // }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Validasi untuk role "admin"
    if (role === "admin") {
      // Pastikan pengguna yang mendaftar sebagai admin memiliki akses admin
      if (!req.user || req.user.role !== "admin") {
        return res.status(403).json({ message: "Only admins can create another admin" });
      }
    }

    // Buat user baru
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user", 
    });

    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error registering user",
      error: error.message,
    });
  }
};

// Fungsi untuk login pengguna
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    let redirectUrl;
    if (user.role === "admin") {
      redirectUrl = "/dashboard";
    } else if (user.role === "user") {
      redirectUrl = "/home";
    }

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
      redirectUrl,
      profile: { id: user.id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

// Middleware untuk melindungi rute
export const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Access token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
