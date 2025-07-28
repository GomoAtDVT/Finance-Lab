import { client } from "../index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const RegisterUserController = async (req, res) => {
  try {
    const { username, email, password, date_of_birth } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const insert_query = `INSERT INTO users (username, email, password, date_of_birth) VALUES ($1, $2, $3, $4)`;

    client.query(
      insert_query,
      [username, email, hashedPassword, date_of_birth],
      (err, result) => {
        if (err) {
          res.json(err);
        } else if (!username || !email || !password || !date_of_birth) {
          res.status(404).json("All fields are required");
        } else {
          res.status(200).json("Hello " + username + "! You're registered!");
        }
      } 
    );
  } catch (error) {
    res.json("Server error", error)
  }
};
