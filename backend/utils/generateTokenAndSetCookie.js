import jwt from 'jsonwebtoken'
import ENV from '../ENV.js'

const generateTokenAndSetCookie = async (id, res) => {
    try {
        const token = jwt.sign({ id }, ENV.JWT_SECRET, {
            expiresIn: '7d',
        })
        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'None',
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })
        return token
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error during genrating tokens' })
    }
}
export default generateTokenAndSetCookie
