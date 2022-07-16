import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutEmotesInput } from "../inputs/UserCreateNestedOneWithoutEmotesInput";

@TypeGraphQL.InputType("EmoteCreateInput", {
  isAbstract: true
})
export class EmoteCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  count?: number | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutEmotesInput, {
    nullable: false
  })
  owner!: UserCreateNestedOneWithoutEmotesInput;
}
