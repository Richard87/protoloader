import fs from "fs"

export default function handler(req, res) {
  const content = fs.readFileSync( "test.json");
  res.status(200).json(content)
}
