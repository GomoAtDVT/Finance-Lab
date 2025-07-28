import jwt from 'jsonwebtoken';
/**
 * Generates an access token for the given user, valid for 10 minutes.
 *
 * @param {Object} user - The user to generate the access token for
 * @returns {string} The generated access token
 */
export default function GenerateAccessTokenMiddleware(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
}