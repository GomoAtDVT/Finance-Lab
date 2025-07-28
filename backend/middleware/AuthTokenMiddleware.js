import jwt from 'jsonwebtoken';
/**
 * A middleware that verifies the Authorization header contains a valid
 * JWT. If it does, adds the user to the request object. If the token is
 * invalid or missing, returns a 401 or 403 status code accordingly.
 * @param {express.Request} req - The request object
 * @param {express.Response} res - The response object
 * @param {express.NextFunction} next - The next middleware function
 * @returns {void}
 */
export default function AuthTokenMiddleware(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token ) return res.status(401).json({ error: "No token provided, please log in" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).json({ error: "Invalid token, please log in again" });
        req.user = user;
        next();
    });
}