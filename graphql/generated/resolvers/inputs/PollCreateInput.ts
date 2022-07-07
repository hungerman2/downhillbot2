import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPollsInput } from "../inputs/UserCreateNestedOneWithoutPollsInput";

@TypeGraphQL.InputType("PollCreateInput", {
  isAbstract: true
})
export class PollCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPollsInput, {
    nullable: false
  })
  author!: UserCreateNestedOneWithoutPollsInput;
}
