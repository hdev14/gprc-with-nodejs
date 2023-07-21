import { credentials } from '@grpc/grpc-js';
import { AddDocumentResponse, CreateAnalysisRequest, GetCreditInfoRequest, GetCreditInfoResponse, RiskClient } from './dist/protos/risk';

const risk = new RiskClient('localhost:50052', credentials.createInsecure());

const request = CreateAnalysisRequest.create({
  document: '123.456.789-10',
});

risk.createAnalysis(request, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(response);
});

const getCreditRequest = GetCreditInfoRequest.create({
  document: '123.456.789-10',
});

const creditCall = risk.getCreditInfo(getCreditRequest);

creditCall.on('data', (chunk: GetCreditInfoResponse) => {
  console.log(chunk);
});

creditCall.on('error', (error) => {
  console.error(error);
});

creditCall.on('status', (status) => {
  console.info(status);
});

creditCall.on('end', () => {
  console.log('Server ending the connection...');
});

const documentCall = risk.addDocument();

documentCall.on('data', (chunk: AddDocumentResponse) => {
  console.log(chunk);

  if (chunk.status === 'completed') {
    documentCall.end();
  }
});

documentCall.on('error', (error) => {
  console.error(error);
});

documentCall.on('status', (status) => {
  console.info(status);
});

documentCall.write({ analysisId: '1', docUrl: 'example1.com' })
documentCall.write({ analysisId: '1', docUrl: 'example2.com' })
documentCall.write({ analysisId: '1', docUrl: 'example3.com' })
documentCall.write({ analysisId: '1', docUrl: 'example4.com' })




