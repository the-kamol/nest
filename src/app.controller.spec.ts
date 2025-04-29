import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckResponse } from './interfaces/health-check.interface';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('getHealthCheck', () => {
    it('should return health check information', () => {
      const mockHealthCheck: HealthCheckResponse = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: 0,
        environment: 'test',
        version: '1.0.0',
      };

      jest.spyOn(appService, 'getHealthCheck').mockReturnValue(mockHealthCheck);
      expect(appController.getHealthCheck()).toBe(mockHealthCheck);
    });
  });

  describe('getSystemInfo', () => {
    it('should return system information', () => {
      const mockSystemInfo = {
        memory: {
          total: 0,
          used: 0,
          external: 0,
        },
        cpu: { user: 0, system: 0 },
        platform: 'test',
        nodeVersion: 'test',
      };

      jest.spyOn(appService, 'getSystemInfo').mockReturnValue(mockSystemInfo);
      expect(appController.getSystemInfo()).toBe(mockSystemInfo);
    });
  });
});
