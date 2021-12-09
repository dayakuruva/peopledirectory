import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const {people} = new PrismaClient();

@Injectable()
export class AppService {
  // getHello(): string {
  //   return 'Hello World Dayasudhan kgffff!';
  // }

    getHello(): string  {
     let value2;
     const users =   people.findMany({
       select:{
         id:true,
         name:true,
        
        }
     });
     users.then((value)=>{
      console.log("value")
      value2 = value;
      console.log(value)
     });
     console.log("value2")
     return "people";
  }
  getHello2(): string  {
    let value2;
    const newPeope =   people.create({
        data:{
         
          name:"daya"
        }
    });
    newPeope.then((value)=>{
     console.log("value222")
     value2 = value;
     console.log(value)
    });
    console.log("value222")
    return "people222";
 }
}
