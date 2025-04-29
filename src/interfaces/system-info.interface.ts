export interface SystemInfoResponse {
  memory: {
    total: number;
    used: number;
    external: number;
  };
  cpu: {
    user: number;
    system: number;
  };
  platform: string;
  nodeVersion: string;
}
