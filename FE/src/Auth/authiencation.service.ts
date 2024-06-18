import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAuthiencation } from './authiencation.entity';

@Injectable()
export class UserAuthiencationService {
    constructor(
        @InjectRepository(UserAuthiencation)
        private UserRepository: Repository<UserAuthiencation>,
    ) {}

    async create(data: any): Promise<UserAuthiencation> {
        return this.UserRepository.save(data);
    }

    async findOne(condition: any): Promise<UserAuthiencation> {
        return this.UserRepository.findOne({
          where:[{email:condition}]
         });
    }

    async findOneId(id: number): Promise<UserAuthiencation> {
      return this.UserRepository.findOne({ where: { id } });

  }
  
}
