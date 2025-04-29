import { Injectable } from '@nestjs/common';
import { HealthCheckResponse } from './interfaces/health-check.interface';

@Injectable()
export class AppService {
  getHealthCheck(): HealthCheckResponse {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development',
      version: process.env.npm_package_version || '1.0.0',
    };
  }

  getSystemInfo(): Record<string, any> {
    return {
      memory: {
        total: process.memoryUsage().heapTotal,
        used: process.memoryUsage().heapUsed,
        external: process.memoryUsage().external,
      },
      cpu: process.cpuUsage(),
      platform: process.platform,
      nodeVersion: process.version,
    };
  }
}
