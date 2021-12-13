
import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

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

@InputType()
export class InPutAddress {
  @Field(type => Int)
  id: number;

  @Field()
  label: string;

  @Field()
  street: string;
  
  @Field()
  city: string;
}