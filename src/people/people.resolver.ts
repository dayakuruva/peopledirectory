
import { Resolver, Mutation, Args, Query, ResolveField, Parent,Root, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PersonType } from './models/person.model';
import { last } from 'rxjs';
import { InPutAddress } from './models/address.model';
@Resolver()
export class PeopleResolver {
  constructor(
    private readonly peopleService: PeopleService
    
  ) { }


  @Query(returns => [PersonType])
  people() {
    console.log("person")
    return  [{
      id: 123,
      firstName: "Daya",
      lastName: "Sudhan",
      email:"daya@mail.com",
      addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"}]
    }];
  }

  //createPerson(firstName: String!, lastName: String!, email: String!): PersonType
  @Mutation(returns => PersonType)
  async createPerson(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args({ name: 'firstName', type: () => String }) firstName: String,
      @Args({ name: 'lastName', type: () => String }) lastName: String,
      @Args({ name: 'email', type: () => String }) email: String,
      @Args({ name: 'addresses', type: () => [InPutAddress] }) addresses: InPutAddress[],
    ) 
  {
    console.log(id+" "+firstName+" "+lastName+" "+email);
    console.log(addresses)
    let retVal = await this.peopleService.createPeople(email,firstName,lastName,addresses);
  
    return retVal;
    // return  {
    //   id: id,
    //   firstName: firstName,
    //   lastName: lastName,
    //   email:email,
    //   addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"},
    //   {"id":2,"label":"office address","street":"1st street","city":"Bangalore"}]
    // };
  }
    // @Query(returns => PersonType)
  // person() {
  //   console.log("person")
  //   return  {
  //     id: 123,
  //     firstName: "Daya",
  //     lastName: "Sudhan",
  //     email:"daya@mail.com",
  //     addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"}]
  //   };
  // }

  // @Mutation(type => String)
  // createPerson(@Args({ name: 'postId' }) postId: string)
  // {
  //       console.log(postId);
  //       return postId;
  // }

  // @ResolveField('people', returns => PersonType)
  // async getPeople(@Parent() person: PersonType) {
  //   const { id } = person;
  //   return person;
  // }
  // @Mutation(type => String)
  // createPerson2(@Args({ name: 'postId' }) postId: string)
  // {
  //       console.log(postId);
  //       return postId;
  // }
  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // } 
  // @ResolveField(type => String)
  // imagePath(@Root() root: PersonType): string {
  //   // if (root.image) {
  //   //   return `/wave/people/${root.id}/image`
  //   // }
  //   return `dayasudhan`
  // }
  
  // @ResolveField(type => String)
  // name(
  //   @Root() root: PersonType,
  //   @Args('simple', { nullable: true }) simple: boolean
  // ) {
  //   //TODO: Handle simple name vs reversed and name prefix/suffix
  //   let name = `${root.lastName || 'No'}, ${root.firstName || 'Name'}${
  //     root.preferredName ? ` (${root.preferredName})` : ''
  //   }`

  //   if (simple) {
  //     name = `${root.firstName || '-Not Available-'}${
  //       root.preferredName ? ` (${root.preferredName})` : ''
  //     } ${root.lastName}`
  //   }

  //   return handleNameWithApostrophe(name)
  // }


  // @Mutation(()=>String)
  // async createPerson(@Args({ name: 'postId' }) postId: string) {
    
  //  console.log(postId);
  //  //return "this.peopleService.createPerson({ id: postId }";
  //   return this.peopleService.createPerson(postId);
  //  //return this.peopleService.createPerson({ id: postId });
  // }
  // @Mutation('updatePost')
  // async updatePost(@Args() args, @Info() info): Promise<Post> {
  //   console.log(postId);
  //   return this.peopleService.createPerson(postId);
  // }

 

  // @Query(()=>String)
  // async people2() {
  //   console.log("People")
  //   return await "People";
  // }
//   @Query(()=>String)
//    Person() {
//     console.log("Person")
//     return  "Person";
//   }
//   @Query(()=>String)
//    Person2() {
//     return  this.peopleService.getHello2();
  
//  }

//  @Query(()=>String)
//  Person33() {
//   return  this.peopleService.getHello2();

// }



}