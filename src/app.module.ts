import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { DatabaseModule } from 'database/database.module';
import { schemaConfig } from 'shared/rules/configSchema';
import { UserModule } from 'users/users.module';
import { DepartmentsService } from './departments/services/departments.service';
import { DepartmentsController } from './departments/controller/departments.controller';
import { DepartmentsModule } from './departments/departments.module';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: config().envFilePath,
      load: [config],
      isGlobal: true,
      validationSchema: schemaConfig,
    }),
    DatabaseModule,
    UserModule,
    DepartmentsModule,
  ],
  controllers: [AppController, DepartmentsController],
  providers: [AppService, DepartmentsService],
})
export class AppModule {}
