import { client } from "../index.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import GenerateAccessTokenMiddleware from "../middleware/GenerateAccessTokenMiddleware.js";

/**
 * Handles a POST request to /login, logging in a user with the given
 * email and password. If the email and password are valid, returns a
 * JSON response with a status of 200 and a message of "Login successful"
 * along with the user's data. If the email or password are invalid, returns
 * a JSON response with a status of 401 and an error of "Invalid email or
 * password". If there is an internal server error, returns a JSON response
 * with a status of 500 and an error of "Internal server error".
 * @param {express.Request} req - The request object
 * @param {express.Response} res - The response object
 * @returns {Promise<void>}
 */
export const LoginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await client.query(query, values);
    if (await bcrypt.compare(password, result.rows[0].password)) {
      const user = result.rows[0];
      const token = GenerateAccessTokenMiddleware(user);
      const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
      });
      return res.status(200).json({ message: "Login successful", userToken: token });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
