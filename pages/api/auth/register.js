import db from "../../../lib/db.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { email, username, name, password, confPassword } = req.body;

  if (password !== confPassword)
    return res.status(400).json({
      msg: "Password and confirm password do not match",
    });

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);
  try {
    const register = await db("users").insert({
      email,
      username,
      name,
      password: hashPassword,
    });

    const registeredUser = await db("users").where({ id: register }).first();

    res.status(200).json({
      msg: "successfully",
      data: registeredUser,
    });
  } catch (error) {
    res.status(401).json({
      msg: "email or username already registered",
    });
  }
}
