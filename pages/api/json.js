import fs from "fs"

export const config = {
  unstable_includeFiles: ['test.json'],
};

export default function handler(req, res) {
  const content = fs.readFileSync( "test.json");
  res.status(200).json(content)
}
