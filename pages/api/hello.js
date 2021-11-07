// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const protoLoader = require('@grpc/proto-loader');
const grpcLibrary = require('@grpc/grpc-js');

const grpcOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

export const config = {
  unstable_includeFiles: ['test.proto'],
};

export default function handler(req, res) {
  const packageDefinition = protoLoader.loadSync("test.proto", grpcOptions);
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
  res.status(200).json(packageObject)
}
