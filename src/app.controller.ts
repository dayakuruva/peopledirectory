import { Body, Controller, Get ,Post } from '@nestjs/common';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { AppService } from './app.service';

@Controller('daya')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('kg')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('kgg')
  getHello2(): string {

    return this.appService.getHello();
  }
  @Get()
  getHello3(): string {
    return "this.appService.getHello()";
  }

  @Post()
  insertHello(@Body('name') name:string):string{
    console.log(name)
    return name;
  }
 
 
}
