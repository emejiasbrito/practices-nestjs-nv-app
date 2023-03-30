import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { DatabaseModule } from 'database.module';
import { schemaConfig } from 'shared/rules/configSchema';
import config from '../config';
import { environments } from '../environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments['dev'] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: schemaConfig,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
