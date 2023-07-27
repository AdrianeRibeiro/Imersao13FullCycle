import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const _this: any = this;

    _this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
