import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RoleUpdateWithoutUsersInput } from "../inputs/RoleUpdateWithoutUsersInput";
import { RoleWhereUniqueInput } from "../inputs/RoleWhereUniqueInput";

@TypeGraphQL.InputType("RoleUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class RoleUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => RoleWhereUniqueInput, {
    nullable: false
  })
  where!: RoleWhereUniqueInput;

  @TypeGraphQL.Field(_type => RoleUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: RoleUpdateWithoutUsersInput;
}
