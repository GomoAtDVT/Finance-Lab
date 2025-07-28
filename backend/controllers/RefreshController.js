import jwt from 'jsonwebtoken'
import GenerateAccessTokenMiddleware from "../middleware/GenerateAccessTokenMiddleware.js";
export const RefreshController =  (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ error: "No refresh token found" });
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if(err){
            res.status(400).json({ error: "Invalid refresh token" });
            return res.clearCookie('refreshToken');
        } else {
            const newAccessToken = GenerateAccessTokenMiddleware(user);
            return res.status(200).json({ accessToken: newAccessToken });
        }
})
}