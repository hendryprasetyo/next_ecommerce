import jwt from "jsonwebtoken";

export default function verifyToken(req, res) {
  const secret = process.env.ACCESS_TOKEN;

  return new Promise((resolve) => {
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(401).json({
        msg: "unAutorization",
      });
    const authSplit = authorization.split(" ");
    const [authType, authToken] = [authSplit[0], authSplit[1]];

    if (authType !== "Bearer")
      return res.status(401).json({
        msg: "Bearer undefined",
      });

    return jwt.verify(authToken, secret, (err, decoded) => {
      if (err)
        return res.status(401).json({
          msg: "Incorect Token",
        });
      return resolve(decoded);
    });
  });
}
