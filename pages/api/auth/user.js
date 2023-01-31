import db from "../../../lib/db";
import verifyToken from "../../../middlewares/verifyToken";

export default async function heandler(req, res) {
  if (req.method !== "GET") return res.status(405).end();
  const data = await verifyToken(req, res);
  console.log(data);
  res.status(200).json({
    msg: "Get datas successfuly",
    data: data,
  });
}
