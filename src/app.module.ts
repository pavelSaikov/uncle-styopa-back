import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { joiConfigFactory, mongooseConfigFactory } from './config';
import {
  AddressModule,
  AuthController,
  AuthModule,
  FilesModule,
  PetitionController,
  PetitionModule,
  UserModule,
  UserRouteController,
} from './modules';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: mongooseConfigFactory,
    }),
    ConfigModule.forRoot(joiConfigFactory()),
    FilesModule,
    AuthModule,
    UserModule,
    AddressModule,
    PetitionModule,
  ],
  controllers: [AuthController, UserRouteController, PetitionController],
  providers: [],
})
export class AppModule {}
