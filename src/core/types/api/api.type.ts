export interface ApiResponse<T = any> {
  pagination?: { total: number; totalPages: number; hasNextPage: boolean; hasPreviousPage: boolean; };
  data: T;
  message?: string;
  success: boolean;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: Record<string, string[]>;
  data?: any;
  statusCode?: number;
}

export interface ApiPagination<T> {
  pagination: {
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    page?: number;
    limit?: number;
  };
  data: T[];
}

export type ApiResult<T> = ApiResponse<T> | ApiError;
