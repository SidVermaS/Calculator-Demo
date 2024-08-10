import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateJWT = (data) => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY, { algorithm: 'HS256', expiresIn: '24h' })
    // console.log(token);
    return token
}
// generateJWT({ user_id: 1 })

export const authenticateJWT = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        if (!token) {
            return res.status(401).json({ message: "unauthorized" })
        }
        const _decoded = jwt.verify(token, process.env.PRIVATE_KEY, { algorithms: ['HS256'] })
        next()
    } catch (_error) {

        return res.status(401).json({ message: "unauthorized" })
    }
}