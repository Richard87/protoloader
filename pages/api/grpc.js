import path from 'path';
const protoLoader = require('@grpc/proto-loader');

const grpcOptions = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

const protoFile = path.join(process.cwd(), "test.proto");

export default function handler(req, res) {
  const packageDefinition = protoLoader.loadSync(protoFile, grpcOptions);
  res.status(200).json(packageDefinition)
}
