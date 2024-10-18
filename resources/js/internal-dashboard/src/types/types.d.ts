declare interface RequestData {
    raw: string;
    method: string;
    uri: string;
    headers: {
      Host: string;
      "User-Agent": string;
      "x-forwarded-for"?: string;
      "x-forwarded-proto"?: string;
      "Content-Type"?: string;
    };
    body?: string;
    query: any[];
    post: any[];
    curl: string;
    plugin?: PluginData;
  }

  declare interface ResponseData {
    status: number;
    reason?: string;
    headers: {
      Server: string;
      "Content-Type": string;
    };
    body: string;
  }

  declare interface ExposeLog {
    id: string;
    performed_at: string;
    duration: number;
    subdomain: string;
    request: RequestData;
    response: ResponseData;
  }

  interface InternalDashboardPageData {
    subdomains: string[];
    user: ExposeUser;
    max_logs: number;
  }

  interface ExposeUser {
    can_specify_subdomains: number;
  }

  interface PostValue {
    name: string
    value: string
  }

  interface PluginData {
    plugin: string
    uiLabel: string
    cliLabel: string
    details: Record<string, string>
  }