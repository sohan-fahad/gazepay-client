// import fetch from "isomorphic-unfetch";

type Config = {
  apiKey: string;
  apiSecret: string;
};

export abstract class Base {
  protected apiKey: string;
  protected apiSecret: string;
  private baseUrl = "https://face-api.gazepay.io/api/v1"

  constructor(config: Config) {
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      "api-key": this.apiKey,
      "x-platform-type": "merchant"
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      console.log(response);

      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}
