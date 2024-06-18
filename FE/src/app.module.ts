import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './Product/product.entity';
import { UserModule } from './User/user.module';
import { User } from './User/user.entity';
import { UserAuthiencation } from './Auth/authiencation.entity';
import { UserAuthiencationModule } from './Auth/authiencation.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '@Abcxyz123',
    database: 'bai2be',
    entities: [Product, User, UserAuthiencation],
    synchronize: true,
    autoLoadEntities: true,
  }),ProductModule,
  UserModule,
  UserAuthiencationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

