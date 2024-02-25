import { Module } from '@nestjs/common';

import * as process from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: 5432,
      password: process.env.PASSWORD,
      username: process.env.DBUSERNAME,
      entities: [],
      database: process.env.DATABASE,
      synchronize: true,
      logging: true,
      ssl: true
    }),
    ProductsModule,
    CartModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
