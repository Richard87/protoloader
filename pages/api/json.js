import fs from "fs"
import path from "path"

const jsonFile = path.join(process.cwd(), "test.json");

export default function handler(req, res) {
  const content = fs.readFileSync(jsonFile);
  res.status(200).json(content)
}
