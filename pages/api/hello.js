// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from "fs";

const protoLoader = require('@grpc/proto-loader');
const grpcLibrary = require('@grpc/grpc-js');

const grpcOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const protoFile = "test.proto";

export const config = {
  unstable_includeFiles: ['test.proto', "test.json"],
};

export default function handler(req, res) {
  // const packageDefinition = protoLoader.loadSync( protoFile, grpcOptions);
  // const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  const test = fs.readFileSync("test.json")
  res.status(200).json(test)
}
