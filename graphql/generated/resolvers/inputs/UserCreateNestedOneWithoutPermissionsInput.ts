import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPermissionsInput } from "../inputs/UserCreateOrConnectWithoutPermissionsInput";
import { UserCreateWithoutPermissionsInput } from "../inputs/UserCreateWithoutPermissionsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPermissionsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPermissionsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPermissionsInput, {
    nullable: true
  })
  create?: UserCreateWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPermissionsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
