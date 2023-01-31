import db from "../../../lib/db";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();
  const { email, username, name, password, newPassword } = req.body;
  const checkUser = await db("users").where({ email, username }).first();

  if (password === newPassword)
    return res.status(400).json({
      msg: "Password has been used before, please enter another password!",
    });
  if (!checkUser)
    return res.status(404).json({
      msg: "Ups...User not found",
    });

  const checkPassword = await bcrypt.compare(password, checkUser.password);

  if (!checkPassword)
    return res.status(404).json({
      msg: "Ups...Incorect password",
    });

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(newPassword, salt);

  await db("users").update({
    name,
    password: hashPassword,
  });
  res.status(200).json({
    msg: "update data successfuly!",
  });
}
