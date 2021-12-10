
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Address {
  @Field(type => Int)
  id: number;

  @Field()
  label: string;

  @Field()
  street: string;
  
  @Field()
  city: string;
}