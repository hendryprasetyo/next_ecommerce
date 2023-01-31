import db from "../../../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookie";

const secretJWT = process.env.ACCESS_TOKEN;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, pass } = req.body;

  const checkUser = await db("users").where({ username }).first();

  if (!checkUser)
    return res.status(404).json({
      msg: "Opss... User not found",
    });

  const checkPassword = await bcrypt.compare(pass, checkUser.password);

  if (!checkPassword)
    return res.status(400).json({
      msg: "Opss... Incorect password",
    });

  const { refresh_token, access_token, password, ...other } = checkUser;
  console.log({ ...other });
  const token = jwt.sign(
    {
      id: checkUser.id,
      username: checkUser.username,
      email: checkUser.email,
      name: checkUser.name,
    },
    secretJWT,
    {
      expiresIn: "1d",
    }
  );

  const refreshToken = jwt.sign(
    {
      id: checkUser.id,
      username: checkUser.username,
      email: checkUser.email,
      name: checkUser.name,
    },
    secretJWT,
    {
      expiresIn: "1d",
    }
  );

  await db("users").update({
    refresh_token: refreshToken,
  });

  res.setHeader(
    "Set-Cookie",
    Cookies.serialize("token", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV !== "developmnet",
      path: "/",
    })
  );
  res.status(200).json({
    data: { ...other },
    token,
    msg: "successfuly",
  });
}
