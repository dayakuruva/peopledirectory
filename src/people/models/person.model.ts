import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Address ,InPutAddress} from './address.model';

@ObjectType()
export class PersonType {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
   lastName?: string;

  @Field({ nullable:false }) 
  email: string

  @Field(type => [Address])
  addresses: Address[];

  @Field ({nullable: true})
  name: string
  // @Field(type => Address)
  // addresses: Address;
}

@InputType()
export class PersonTypeInput {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
   lastName?: string;

  @Field({ nullable:false }) 
  email: string

  @Field(type => [InPutAddress])
  addresses: InPutAddress[];

  // @Field ({nullable: true})
  // name: string

  // @Field(type => Address)
  // addresses: Address;
}