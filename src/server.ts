import * as grpc from '@grpc/grpc-js';
import { randomUUID } from 'crypto';
import * as risk from './dist/protos/risk';

const server = new grpc.Server();

const analysis: risk.AnalysisData[] = [];

// Unary
const createAnalysis: grpc.handleUnaryCall<risk.CreateAnalysisRequest, risk.CreateAnalysisResponse> = (call, callback) => {
  if (!call.request.document) {
    callback({ code: grpc.status.INVALID_ARGUMENT });
    return;
  }

  const newData = {
    id: randomUUID(),
    document: call.request.document,
    status: 'pending',
  }

  analysis.push(newData);

  callback(null, { analysis: newData });
}

const getCreditInfo: grpc.handleServerStreamingCall<risk.GetCreditInfoRequest, risk.GetCreditInfoResponse> = (call) => {
  const { document } = call.request;

  console.log(document);

  call.write({ status: 'processing' });

  setTimeout(() => {
    call.write({ status: 'processing' });
  }, 1000);

  setTimeout(() => {
    call.write({ status: 'completed' });
    call.end();
  }, 3000);
}

const documents: string[] = [];

const addDocument: grpc.handleBidiStreamingCall<risk.AddDocumentRequest, risk.AddDocumentResponse> = (call) => {
  call.on('data', (request: risk.AddDocumentRequest) => {
    documents.push(request.docUrl);

    if (documents.length < 4) {
      call.write({ status: 'pending' });
    } else {
      call.write({ status: 'completed' });
    }
  });

  call.on('end', () => {
    call.end();
  });
}

server.addService(risk.RiskService, {
  createAnalysis,
  getCreditInfo,
  addDocument,
});

server.bindAsync('localhost:50052', grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) throw error;

  console.log('Server is running on port', port);

  server.start();
});