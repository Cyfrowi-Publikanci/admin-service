import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

export const config = () => ({
  serviceHostname: process.env.SERVICE_HOSTNAME,
  servicePort: process.env.SERVICE_PORT,
  authenticationServicePort: process.env.AUTHENTICATION_SERVICE_PORT,
  authenticationServiceHostname: process.env.AUTHENTICATION_SERVICE_HOSTNAME
});

type TConfig = ReturnType<typeof config>;

@Injectable()
export class ConfigService extends NestConfigService<TConfig> {
  constructor() {
    super(config());
  }

  get<T extends keyof TConfig>(propertyPath: T): TConfig[T] | undefined {
    return super.get(propertyPath);
  }
}
