const protoLoader = require('@grpc/proto-loader');

const grpcOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const protoFile = "test.proto";

export const config = {
  unstable_includeFiles: ['test.proto'],
};

export default function handler(req, res) {
  const packageDefinition = protoLoader.loadSync( protoFile, grpcOptions);
  res.status(200).json(packageDefinition)
}
