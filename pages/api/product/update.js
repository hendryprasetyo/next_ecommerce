import db from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "PUT") return res.status(405).end();

  res.status(200).json({
    msg: "update data  successfully",
  });
}
