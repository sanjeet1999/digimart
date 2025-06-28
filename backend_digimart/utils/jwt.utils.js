import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// dotenv.config();
const generateToken = (payload) => {
    console.log("creating jwt token for user:", payload.email);
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d', // expires in 24 hours
  });
};

export default generateToken; 