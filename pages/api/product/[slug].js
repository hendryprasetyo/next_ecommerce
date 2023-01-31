import db from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  res.status(200).json({
    msg: "Get data by slug is successfuly",
  });
}
