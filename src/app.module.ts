import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './server/users/users.module';
import { RolesModule } from './server/roles/roles.module';
import { CustomersModule } from './server/customers/customers.module';
import { ProceedingsModule } from './server/proceedings/proceedings.module';
import { User } from './server/users/entities/user.entity';
import { Role } from './server/roles/entities/role.entity';
import { JoiValidation } from './config/joi.validation';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: JoiValidation
    }),
    TypeOrmModule.forRootAsync({
      async useFactory(configService: ConfigService) {
          return {
              type: 'postgres',
              host: configService.get('DB_HOST'),
              port: configService.get('DB_PORT'),
              database: configService.get('DB_NAME'),
              username: configService.get('DB_USERNAME'),
              password: configService.get('DB_PASSWORD'),
              autoLoadEntities: true,
              synchronize: true,
              // synchronize: configService.get('NODE_ENV') !== 'production',
              retryAttempts: 1,
              entities: [User, Role]
              // logging: configService.get('NODE_ENV') !== 'production',
          }
      },
      inject: [ConfigService],
    }),
    UsersModule,
    RolesModule,
    CustomersModule,
    ProceedingsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
