import { Module } from '@nestjs/common';
import { PeopleResolver } from './people.resolver';
import { PeopleService } from './people.service';
import { PersonResolver } from './person.resolver';
@Module({
  providers: [PeopleResolver,PeopleService,PersonResolver],
})
export class PeopleModule {}
