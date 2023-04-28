import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { DatabaseModule } from 'database/database.module';
import { schemaConfig } from 'shared/rules/configSchema';
import { UserModule } from 'users/users.module';
import { DepartmentsService } from './departments/services/departments.service';
import { DepartmentController } from './departments/controllers/departments.controller';
import { DepartmentModule } from './departments/departments.module';
import { DepartmentUserModule } from './departments-users/departments-users.module';
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
    DepartmentModule,
    DepartmentUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
