import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { DatabaseModule } from 'database/database.module';
import { schemaConfig } from 'shared/rules/configSchema';
import { UserModule } from 'users/users.module';
import config from './config/config';
import { environments } from '../environments';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        environments[process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'] ||
        '.env',
      load: [config],
      isGlobal: true,
      validationSchema: schemaConfig,
    }),
    DatabaseModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
