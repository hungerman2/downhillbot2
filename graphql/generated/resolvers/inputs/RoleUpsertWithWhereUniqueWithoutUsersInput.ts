import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleCreateWithoutUsersInput } from "../inputs/RoleCreateWithoutUsersInput";
import { RoleUpdateWithoutUsersInput } from "../inputs/RoleUpdateWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class RoleUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: RoleUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => RoleCreateWithoutUsersInput, {
    nullable: false
  })
  create!: RoleCreateWithoutUsersInput;
}
