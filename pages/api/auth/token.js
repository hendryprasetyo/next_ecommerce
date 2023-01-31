import db from "../../../lib/db";
import jwt from "jsonwebtoken";

export default async function refreshToken(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  try {
    const { authorization } = req.headers;

    console.log(authorization);

    if (!authorization) return res.status(401).json({ msg: "unauthorization" });
    const user = await db("users").where({ refresh_token: authorization });
    if (!user[0]) return res.status(401).json({ msg: "failed" });
    jwt.verify(authorization, process.env.REFRESH_TOKEN, (err, decode) => {
      if (err) return res.sendStatus(404);
      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;
      const username = user[0].username;
      const accessToken = jwt.sign(
        { userId, name, email, username },
        process.env.REFRESH_TOKEN
      );
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
}

// import db from "../../../lib/db";
// import jwt from "jsonwebtoken";

// const secretJWT = process.env.ACCESS_TOKEN;

// export default async function handler(req, res) {
//   if (req.method !== "GET") return res.status(405).end();

//   const cookies = Cookies.parse(req.headers.cookie);

//   // Ambil token dari cookie
//   const token = cookies.token;

//   // Cek apakah token ada
//   if (!token) return res.status(401).json({ msg: "Unauthorized" });

//   // Verifikasi token
//   try {
//     const decoded = jwt.verify(token, secretJWT);
//     const { id } = decoded;

//     // Ambil data user dari database berdasarkan id yang terdapat di token
//     const user = await db("users").where({ id }).first();

//     // Kirim data user ke client
//     res.status(200).json({ user });
//   } catch (error) {
//     return res.status(401).json({ msg: "Unauthorized" });
//   }
// }
