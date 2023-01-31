import db from "../../../lib/db";
import path from "path";

export default async function saveProductImage(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  if (req.files.file) {
    return res.status(400).json({ msg: "no file uploaded" });
  }

  const { name, details, slug, price, discount, quantity, sku } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedTypes = [".png", ".jpg", ".jpeg"];

  if (!allowedTypes.includes(ext.toLowerCase())) {
    return res.status(422).json({ msg: "invalid image file type" });
  }
  if (fileSize > 5000000) {
    return res.status(422).json({ msg: "image must be less than 5MB" });
  }

  file.mv(`./public/images/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await db("product").insert({
        name,
        image: fileName,
        url: url,
        details: details,
        slug,
        sku,
        price,
        discount,
        quantity,
      });
      res.status(200).json({
        msg: "product created successfuly",
      });
    } catch (error) {
      console.log(error.message);
      return res.status(500).json({ msg: "internal server error" });
    }
  });
}
