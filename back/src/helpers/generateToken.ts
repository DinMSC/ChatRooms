import jwt from 'jsonwebtoken';

const generateToken = (id: string): string => {
    const secret = process.env.JWT_SECRET || 'defaultSecret';

    return jwt.sign({ id }, secret, {
        expiresIn: '2h',
    });
};

export default generateToken;
