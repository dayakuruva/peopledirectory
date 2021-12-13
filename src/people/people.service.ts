import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Address } from './models/address.model';

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
}
// getHello(): string {
  //   return 'Hello World Dayasudhan kgffff!';
  // }

  //   getHello(): string  {
  //    let value2;
  //    const users =   people.findMany({
  //      select:{
  //        id:true,
  //        name:true,
        
  //       }
  //    });
  //    users.then((value)=>{
  //     console.log("value")
  //     value2 = value;
  //     console.log(value)
  //    });
  //    console.log("value2")
  //    return "people";
  // }
//   getHello2(): string  {
//     let value2;
//     const newPeope =   people.create({
//         data:{
      
//           name:"dayasudhan"
//         }
//     });
//     newPeope.then((value)=>{
//      console.log("value222")
//      value2 = value;
//      console.log(value)
//     });
//     console.log("value222")
//     return "people222";
//  }