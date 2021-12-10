import { Resolver, Mutation, Args, Query, ResolveField, Parent,Root,Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PersonType } from './models/person.model';
import { Address } from './models/address.model';


@Resolver(of => PersonType)
export class PersonResolver {

  @ResolveField(returns => Address,{nullable : true})
  address(@Root() person: PersonType, @Args("index",{type: ()=>Int}) index: number){
    return person.addresses[index] 
  }
}