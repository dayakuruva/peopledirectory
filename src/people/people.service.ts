import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Address } from './models/address.model';
import { PersonTypeInput } from './models/person.model';

const {people} = new PrismaClient();

@Injectable()
export class PeopleService {
  
    createPerson(
      email:String,
      firstName:String , 
      lastName:String  ): any  {
      
  
  const newPeope =     people.create({
      data:
        {  
          email: String(email) ,
          firstName: String(firstName),
          lastName:String(lastName)
        }
      });
  newPeope.then((value1)=>{
   console.log("success1")
   console.log(value1)
   console.log("success2")

    return value1;
    },(value2)=>{
      console.log("failure")
      console.log(value2)
      return value2;
    }).catch((error) => {
      
      console.log("Error");
      console.log( error);
      console.log( "error");
      return error;
  })
  // console.log("value222")
    //return "success";
  }

  async createPeople(
    email:String,
    firstName:String , 
    lastName:String ,
    addresses:Address[] )  {
    

    return     people.create({
    data:
      {  
        email: String(email) ,
        firstName: String(firstName),
        lastName:String(lastName),
        
      }
    });

  }
  async createPeople2(
    person:PersonTypeInput )  {
    
  console.log("createPeople2")
  console.log(person.addresses[0].label);
    let retPerson =    await people.create({
    data:
      {  
        email: person.email ,
        firstName: person.firstName,
        lastName:person.lastName,
        addresses: {
          create:  [{
              label : person.addresses[0].label,
              city : person.addresses[0].city,
              street : person.addresses[0].street,
          
          }]
        }
          
      }
    });
    console.log("retPerson 1");
    console.log(retPerson);
    console.log("retPerson 2");

    return retPerson;
  }
// By ID
  async getPerson(id:number){
    const person = await people.findUnique({
      where: {
        id: id,
      },
    })
    console.log("person 1");
    console.log(person);
    console.log("person 2");
    return person;
  }
  async getAllPeople(){
    const person = await people.findMany({
      include: {
        addresses: true,
      },
    })
    console.log("person 1");
    console.log(person);
    console.log("person 2");
    return person;
  }

  async updatePersonEmail(id:number,email:string){
    const person = await people.update({
      where: {
        id: id,
      },
      data: {
        email: email,
      },
    })
    console.log("person 1");
    console.log(person);
    console.log("person 2");
    return person;
  }
  async removePerson(id:number){
    const person = await people.delete({
      where: {
        id: id,
      },
    })
    console.log("person 1");
    console.log(person);
    console.log("person 2");
    return person;
  }
}

