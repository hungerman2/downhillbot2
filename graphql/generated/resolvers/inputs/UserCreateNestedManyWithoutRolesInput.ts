import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutRolesInput } from "../inputs/UserCreateOrConnectWithoutRolesInput";
import { UserCreateWithoutRolesInput } from "../inputs/UserCreateWithoutRolesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutRolesInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutRolesInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutRolesInput], {
    nullable: true
  })
  create?: UserCreateWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutRolesInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
