import Cookies from "cookie";

export default async function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    Cookies.serialize("token", "", {
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(0),
      secure: process.env.NODE_ENV !== "developmnet",
      path: "/",
    })
  );
  res.status(200).json({
    msg: "Logout  Successfuly",
  });
}
