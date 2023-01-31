import db from "../../../lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "DELETE") return res.status(405).end();
  const { email, password } = req.body;
  const checkUser = await db("users").where({ email }).first();

  if (!checkUser)
    return res.status(404).json({
      msg: "User Not Found!",
    });

  const isPasswordValid = await bcrypt.compare(password, checkUser.password);
  if (!isPasswordValid)
    return res.status(400).json({
      msg: "Incorrect password",
    });

  try {
    await db("users").where({ email }).delete();
    res.status(200).json({
      msg: "Successfully deleted user",
    });
  } catch (error) {
    if (error)
      return res.status(400).json({
        msg: "Error deleting user",
      });
  }
}
