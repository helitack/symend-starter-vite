export type Nullable<T = unknown> = T | null;

export interface ApiResponseWithData<Data> {
  data: Data;
}

interface ApiResponseWithMetadata<Data, RequestMetadata>
  extends ApiResponseWithData<Data> {
  meta: RequestMetadata;
}

export type ApiResponse<
  Data,
  RequestMetadata = undefined,
> = RequestMetadata extends undefined
  ? ApiResponseWithData<Data>
  : ApiResponseWithMetadata<Data, RequestMetadata>;
