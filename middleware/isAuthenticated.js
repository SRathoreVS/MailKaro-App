import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    //check if user is still active if token is not expired
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      return res.status(401).json({ message: "User not authenticated" });
    }
    //check token decoded if token there 
    const decode = await jwt.verify(token,process.env.SECRET_KEY)
    if(!decode) {
        return res.status(401).json({message:"Invalid Token"})
    }

    req.id = decode.userId
    next()
  } catch (error) {
    console.error(error);
  }
};
