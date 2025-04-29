import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheckResponse } from './interfaces/health-check.interface';
import { SystemInfoResponse } from './interfaces/system-info.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealthCheck(): HealthCheckResponse {
    return this.appService.getHealthCheck();
  }

  @Get('system')
  getSystemInfo(): SystemInfoResponse {
    return this.appService.getSystemInfo();
  }
}
