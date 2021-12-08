
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { AppService } from '../app.service';
@Resolver()
export class PeopleResolver {
  // constructor(
  //   private readonly appService: AppService
    
  // ) { }
  @Query(()=>String)
  async People() {
    return await "People";
  }
  @Query(()=>String)
   Person() {
    return  "Person";
  }

}