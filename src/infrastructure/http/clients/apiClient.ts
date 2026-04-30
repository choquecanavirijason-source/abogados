import { HttpClient } from "../base/HttpClient";
import { config } from "@/config/config";

const apiClient = new HttpClient({
  baseURL: `${config.apiUrl}/api/v2`,
  timeout: 30000,
});

export { apiClient };
