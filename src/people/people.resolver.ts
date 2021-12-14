
import { Resolver, Mutation, Args, Query, ResolveField, Parent,Root, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PersonType, PersonTypeInput } from './models/person.model';
import { last } from 'rxjs';
import { InPutAddress } from './models/address.model';
@Resolver()
export class PeopleResolver {
  constructor(
    private readonly peopleService: PeopleService
    
  ) { }


  @Query(returns => PersonType)
  people() {
    console.log("person")
    return  [{
      id: 123,
      firstName: "Daya",
      lastName: "Sudhan",
      email:"daya@mail.com",
      addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"}]
    }][0];
  }

  @Query(returns => PersonType)
  getPerson(
    @Args({ name: 'id', type: () => Int }) id: number,
    ) 
  {
    return  this.peopleService.getPerson(id);

  }
  @Query(returns => [PersonType])
  getPeople() 
  {
    console.log("getPeople")
    return  this.peopleService.getAllPeople();
  }

  @Mutation(returns => PersonType)
  updatePerson(
    @Args({ name: 'id', type: () => Int }) id: number,
    @Args({ name: 'email', type: () => String }) email: string,
    ) 
  {
    console.log("updatePerson")
    return  this.peopleService.updatePersonEmail(id,email);
  }
  @Mutation(returns => PersonType)
  removePerson( @Args({ name: 'id', type: () => Int }) id: number) 
  {
    console.log("removePerson")
    return  this.peopleService.removePerson(id);
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
    // let retVal = await this.peopleService.createPeople(email,firstName,lastName,addresses);
    // return retVal;
    return  {
      id: 123,
      firstName: "Daya",
      lastName: "Sudhan",
      email:"daya@mail.com",
      addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"}]
    };
    
    // return  {
    //   id: id,
    //   firstName: firstName,
    //   lastName: lastName,
    //   email:email,
    //   addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"},
    //   {"id":2,"label":"office address","street":"1st street","city":"Bangalore"}]
    // };
  }
  @Mutation(returns => PersonType)
  async createPerson2(
      @Args({ name: 'person', type: () => PersonTypeInput }) person: PersonTypeInput   
    ) 
  {
    console.log(person.id+" "+person.firstName+" "+person.lastName+" "+person.email);
    console.log(person)
    console.log("createPeople 1")
    let retVal = await this.peopleService.createPeople2(person);
    console.log("createPeople 2")
    console.log(retVal);
   return retVal;
    // return  {
    //   id: 123,
    //   firstName: "Daya",
    //   lastName: "Sudhan",
    //   email:"daya@mail.com",
    //   addresses:[{"id":1,"label":"Home address","street":"1st street","city":"Bangalore"}]
    // };
  
  }

}