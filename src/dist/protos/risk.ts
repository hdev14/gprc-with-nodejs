/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientDuplexStream,
  ClientOptions,
  ClientReadableStream,
  ClientUnaryCall,
  handleBidiStreamingCall,
  handleServerStreamingCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "";

export interface AnalysisData {
  id: string;
  document: string;
  status: string;
}

export interface CreateAnalysisRequest {
  document: string;
}

export interface CreateAnalysisResponse {
  analysis: AnalysisData | undefined;
}

export interface GetCreditInfoRequest {
  document: string;
}

export interface GetCreditInfoResponse {
  status: string;
}

export interface AddDocumentRequest {
  analysisId: string;
  docUrl: string;
}

export interface AddDocumentResponse {
  status: string;
}

function createBaseAnalysisData(): AnalysisData {
  return { id: "", document: "", status: "" };
}

export const AnalysisData = {
  encode(message: AnalysisData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.document !== "") {
      writer.uint32(18).string(message.document);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AnalysisData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalysisData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.document = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AnalysisData {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      document: isSet(object.document) ? String(object.document) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: AnalysisData): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.document !== "") {
      obj.document = message.document;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AnalysisData>, I>>(base?: I): AnalysisData {
    return AnalysisData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AnalysisData>, I>>(object: I): AnalysisData {
    const message = createBaseAnalysisData();
    message.id = object.id ?? "";
    message.document = object.document ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseCreateAnalysisRequest(): CreateAnalysisRequest {
  return { document: "" };
}

export const CreateAnalysisRequest = {
  encode(message: CreateAnalysisRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document !== "") {
      writer.uint32(10).string(message.document);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAnalysisRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAnalysisRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.document = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAnalysisRequest {
    return { document: isSet(object.document) ? String(object.document) : "" };
  },

  toJSON(message: CreateAnalysisRequest): unknown {
    const obj: any = {};
    if (message.document !== "") {
      obj.document = message.document;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAnalysisRequest>, I>>(base?: I): CreateAnalysisRequest {
    return CreateAnalysisRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateAnalysisRequest>, I>>(object: I): CreateAnalysisRequest {
    const message = createBaseCreateAnalysisRequest();
    message.document = object.document ?? "";
    return message;
  },
};

function createBaseCreateAnalysisResponse(): CreateAnalysisResponse {
  return { analysis: undefined };
}

export const CreateAnalysisResponse = {
  encode(message: CreateAnalysisResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.analysis !== undefined) {
      AnalysisData.encode(message.analysis, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateAnalysisResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAnalysisResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.analysis = AnalysisData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAnalysisResponse {
    return { analysis: isSet(object.analysis) ? AnalysisData.fromJSON(object.analysis) : undefined };
  },

  toJSON(message: CreateAnalysisResponse): unknown {
    const obj: any = {};
    if (message.analysis !== undefined) {
      obj.analysis = AnalysisData.toJSON(message.analysis);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAnalysisResponse>, I>>(base?: I): CreateAnalysisResponse {
    return CreateAnalysisResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateAnalysisResponse>, I>>(object: I): CreateAnalysisResponse {
    const message = createBaseCreateAnalysisResponse();
    message.analysis = (object.analysis !== undefined && object.analysis !== null)
      ? AnalysisData.fromPartial(object.analysis)
      : undefined;
    return message;
  },
};

function createBaseGetCreditInfoRequest(): GetCreditInfoRequest {
  return { document: "" };
}

export const GetCreditInfoRequest = {
  encode(message: GetCreditInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.document !== "") {
      writer.uint32(10).string(message.document);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCreditInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCreditInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.document = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCreditInfoRequest {
    return { document: isSet(object.document) ? String(object.document) : "" };
  },

  toJSON(message: GetCreditInfoRequest): unknown {
    const obj: any = {};
    if (message.document !== "") {
      obj.document = message.document;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCreditInfoRequest>, I>>(base?: I): GetCreditInfoRequest {
    return GetCreditInfoRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCreditInfoRequest>, I>>(object: I): GetCreditInfoRequest {
    const message = createBaseGetCreditInfoRequest();
    message.document = object.document ?? "";
    return message;
  },
};

function createBaseGetCreditInfoResponse(): GetCreditInfoResponse {
  return { status: "" };
}

export const GetCreditInfoResponse = {
  encode(message: GetCreditInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCreditInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCreditInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCreditInfoResponse {
    return { status: isSet(object.status) ? String(object.status) : "" };
  },

  toJSON(message: GetCreditInfoResponse): unknown {
    const obj: any = {};
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCreditInfoResponse>, I>>(base?: I): GetCreditInfoResponse {
    return GetCreditInfoResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCreditInfoResponse>, I>>(object: I): GetCreditInfoResponse {
    const message = createBaseGetCreditInfoResponse();
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseAddDocumentRequest(): AddDocumentRequest {
  return { analysisId: "", docUrl: "" };
}

export const AddDocumentRequest = {
  encode(message: AddDocumentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.analysisId !== "") {
      writer.uint32(10).string(message.analysisId);
    }
    if (message.docUrl !== "") {
      writer.uint32(18).string(message.docUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDocumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.analysisId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.docUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDocumentRequest {
    return {
      analysisId: isSet(object.analysisId) ? String(object.analysisId) : "",
      docUrl: isSet(object.docUrl) ? String(object.docUrl) : "",
    };
  },

  toJSON(message: AddDocumentRequest): unknown {
    const obj: any = {};
    if (message.analysisId !== "") {
      obj.analysisId = message.analysisId;
    }
    if (message.docUrl !== "") {
      obj.docUrl = message.docUrl;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDocumentRequest>, I>>(base?: I): AddDocumentRequest {
    return AddDocumentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddDocumentRequest>, I>>(object: I): AddDocumentRequest {
    const message = createBaseAddDocumentRequest();
    message.analysisId = object.analysisId ?? "";
    message.docUrl = object.docUrl ?? "";
    return message;
  },
};

function createBaseAddDocumentResponse(): AddDocumentResponse {
  return { status: "" };
}

export const AddDocumentResponse = {
  encode(message: AddDocumentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddDocumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddDocumentResponse {
    return { status: isSet(object.status) ? String(object.status) : "" };
  },

  toJSON(message: AddDocumentResponse): unknown {
    const obj: any = {};
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AddDocumentResponse>, I>>(base?: I): AddDocumentResponse {
    return AddDocumentResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddDocumentResponse>, I>>(object: I): AddDocumentResponse {
    const message = createBaseAddDocumentResponse();
    message.status = object.status ?? "";
    return message;
  },
};

export type RiskService = typeof RiskService;
export const RiskService = {
  /** Unary */
  createAnalysis: {
    path: "/Risk/createAnalysis",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateAnalysisRequest) => Buffer.from(CreateAnalysisRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateAnalysisRequest.decode(value),
    responseSerialize: (value: CreateAnalysisResponse) => Buffer.from(CreateAnalysisResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateAnalysisResponse.decode(value),
  },
  /** Server Streaming */
  getCreditInfo: {
    path: "/Risk/getCreditInfo",
    requestStream: false,
    responseStream: true,
    requestSerialize: (value: GetCreditInfoRequest) => Buffer.from(GetCreditInfoRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetCreditInfoRequest.decode(value),
    responseSerialize: (value: GetCreditInfoResponse) => Buffer.from(GetCreditInfoResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetCreditInfoResponse.decode(value),
  },
  /** Client & Server Streaming (Bidirectional Streaming) */
  addDocument: {
    path: "/Risk/addDocument",
    requestStream: true,
    responseStream: true,
    requestSerialize: (value: AddDocumentRequest) => Buffer.from(AddDocumentRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddDocumentRequest.decode(value),
    responseSerialize: (value: AddDocumentResponse) => Buffer.from(AddDocumentResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => AddDocumentResponse.decode(value),
  },
} as const;

export interface RiskServer extends UntypedServiceImplementation {
  /** Unary */
  createAnalysis: handleUnaryCall<CreateAnalysisRequest, CreateAnalysisResponse>;
  /** Server Streaming */
  getCreditInfo: handleServerStreamingCall<GetCreditInfoRequest, GetCreditInfoResponse>;
  /** Client & Server Streaming (Bidirectional Streaming) */
  addDocument: handleBidiStreamingCall<AddDocumentRequest, AddDocumentResponse>;
}

export interface RiskClient extends Client {
  /** Unary */
  createAnalysis(
    request: CreateAnalysisRequest,
    callback: (error: ServiceError | null, response: CreateAnalysisResponse) => void,
  ): ClientUnaryCall;
  createAnalysis(
    request: CreateAnalysisRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateAnalysisResponse) => void,
  ): ClientUnaryCall;
  createAnalysis(
    request: CreateAnalysisRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateAnalysisResponse) => void,
  ): ClientUnaryCall;
  /** Server Streaming */
  getCreditInfo(
    request: GetCreditInfoRequest,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<GetCreditInfoResponse>;
  getCreditInfo(
    request: GetCreditInfoRequest,
    metadata?: Metadata,
    options?: Partial<CallOptions>,
  ): ClientReadableStream<GetCreditInfoResponse>;
  /** Client & Server Streaming (Bidirectional Streaming) */
  addDocument(): ClientDuplexStream<AddDocumentRequest, AddDocumentResponse>;
  addDocument(options: Partial<CallOptions>): ClientDuplexStream<AddDocumentRequest, AddDocumentResponse>;
  addDocument(
    metadata: Metadata,
    options?: Partial<CallOptions>,
  ): ClientDuplexStream<AddDocumentRequest, AddDocumentResponse>;
}

export const RiskClient = makeGenericClientConstructor(RiskService, "Risk") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): RiskClient;
  service: typeof RiskService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
