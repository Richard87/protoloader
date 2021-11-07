// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const protoLoader = require('@grpc/proto-loader');
const grpcLibrary = require('@grpc/grpc-js');
import { resolve, join } from "path";

const grpcOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const protoFile = join(process.cwd(), "test.proto");

export const config = {
  unstable_includeFiles: ['test.proto'],
};

export default function handler(req, res) {
  const packageDefinition = protoLoader.loadSync( protoFile, grpcOptions);
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  res.status(200).json(packageObject)
}
