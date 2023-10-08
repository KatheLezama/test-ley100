import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ProceedingModule } from './proceeding/proceeding.module';
import { CustomerModule } from './customer/customer.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
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
              // synchronize: configService.get('NODE_ENV') !== 'production',
              retryAttempts: 1,
              // logging: configService.get('NODE_ENV') !== 'production',
          }
      },
      inject: [ConfigService],
    }),
    RoleModule, 
    UserModule, 
    ProceedingModule, 
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
