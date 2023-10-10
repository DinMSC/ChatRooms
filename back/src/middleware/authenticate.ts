import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/userModel';

interface DecodedToken extends JwtPayload {
    id: string; // Assuming 'id' is a field in your JWT payload
}

const protect = async (
    req: Request | any,
    res: Response,
    next: NextFunction
) => {
    let token;
    if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // get token from header
            token = req.headers.authorization.split(' ')[1];

            // verify and specify the expected payload type
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET as string
            ) as DecodedToken;

            // get user from the token
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.log(error);
            res.status(401);
        }
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
};

export default protect;
