import { TypeOrmModule } from "@nestjs/typeorm";
import { UserAuthiencationController } from "./authiencation.controller";
import { UserAuthiencation } from "./authiencation.entity";
import { UserAuthiencationService } from "./authiencation.service";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";


@Module({
  imports: [TypeOrmModule.forFeature([UserAuthiencation]),
  JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '1d'}
  })
          ],
  controllers: [UserAuthiencationController],
  providers: [UserAuthiencationService],
})
export class UserAuthiencationModule {}