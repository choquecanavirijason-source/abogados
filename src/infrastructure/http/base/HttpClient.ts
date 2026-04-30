import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { ApiResponse, ApiError } from "@/core/types/api/api.type";

export interface HttpClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  withCredentials?: boolean;
}

interface RequestConfigWithErrorControl extends AxiosRequestConfig {
  skipGlobalErrorHandler?: boolean;
}

export class HttpClient {
  private axiosInstance: AxiosInstance;
  private errorHandlers: Array<(error: ApiError) => void> = [];

  constructor(config: HttpClientConfig) {
    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 30000,
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
      withCredentials: config.withCredentials || false,
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const apiError = this.handleError(error);
        const skipGlobalErrorHandler =
          (error.config as RequestConfigWithErrorControl | undefined)
            ?.skipGlobalErrorHandler ?? false;

        if (!skipGlobalErrorHandler) {
          this.errorHandlers.forEach((handler) => handler(apiError));
        }

        return Promise.reject(apiError);
      },
    );
  }

  addRequestInterceptor(
    onFulfilled?: (config: any) => any,
    onRejected?: (error: any) => any,
  ): number {
    return this.axiosInstance.interceptors.request.use(onFulfilled, onRejected);
  }

  // interceptor de response
  addResponseInterceptor(
    onFulfilled?: (response: AxiosResponse) => AxiosResponse,
    onRejected?: (error: any) => any,
  ): number {
    return this.axiosInstance.interceptors.response.use(
      onFulfilled,
      onRejected,
    );
  }

  // interceptor de error
  onError(handler: (error: ApiError) => void): void {
    this.errorHandlers.push(handler);
  }

  // convertir errores de axios a ApiError
  private handleError(error: AxiosError): ApiError {
    if (error.response) {
      const data = error.response.data as any;
      return {
        success: false,
        message: data?.message || "Error del servidor",
        errors: data?.errors,
        data: data?.data,
        statusCode: error.response.status,
      };
    } else if (error.request) {
      return {
        success: false,
        message: "No se pudo conectar con el servidor",
        statusCode: 0,
      };
    } else {
      return {
        success: false,
        message: error.message || "Error desconocido",
        statusCode: 0,
      };
    }
  }

  async get<T = any>(
    url: string,
    config?: RequestConfigWithErrorControl,
  ): Promise<ApiResponse<T>> {
    const requestConfig = {
      ...config,
      ...(config?.baseURL && { baseURL: config.baseURL }),
    };
    const response = await this.axiosInstance.get<ApiResponse<T>>(
      url,
      requestConfig,
    );
    return response.data;
  }

  async post<T = any>(
    url: string,
    data?: any,
    config?: RequestConfigWithErrorControl,
  ): Promise<ApiResponse<T>> {
    const requestConfig = {
      ...config,
      ...(config?.baseURL && { baseURL: config.baseURL }),
    };
    const response = await this.axiosInstance.post<ApiResponse<T>>(
      url,
      data,
      requestConfig,
    );
    return response.data;
  }

  async put<T = any>(
    url: string,
    data?: any,
    config?: RequestConfigWithErrorControl,
  ): Promise<ApiResponse<T>> {
    const requestConfig = {
      ...config,
      ...(config?.baseURL && { baseURL: config.baseURL }),
    };
    const response = await this.axiosInstance.put<ApiResponse<T>>(
      url,
      data,
      requestConfig,
    );
    return response.data;
  }

  async patch<T = any>(
    url: string,
    data?: any,
    config?: RequestConfigWithErrorControl,
  ): Promise<ApiResponse<T>> {
    const requestConfig = {
      ...config,
      ...(config?.baseURL && { baseURL: config.baseURL }),
    };
    const response = await this.axiosInstance.patch<ApiResponse<T>>(
      url,
      data,
      requestConfig,
    );
    return response.data;
  }

  async delete<T = any>(
    url: string,
    config?: RequestConfigWithErrorControl,
  ): Promise<ApiResponse<T>> {
    const requestConfig = {
      ...config,
      ...(config?.baseURL && { baseURL: config.baseURL }),
    };
    const response = await this.axiosInstance.delete<ApiResponse<T>>(
      url,
      requestConfig,
    );
    return response.data;
  }

  getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}
