import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutEmotesInput } from "../inputs/UserCreateOrConnectWithoutEmotesInput";
import { UserCreateWithoutEmotesInput } from "../inputs/UserCreateWithoutEmotesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutEmotesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutEmotesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutEmotesInput, {
    nullable: true
  })
  create?: UserCreateWithoutEmotesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutEmotesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutEmotesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
