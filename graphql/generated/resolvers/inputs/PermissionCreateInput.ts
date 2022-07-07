import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPermissionsInput } from "../inputs/UserCreateNestedOneWithoutPermissionsInput";

@TypeGraphQL.InputType("PermissionCreateInput", {
  isAbstract: true
})
export class PermissionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  channelId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  denied?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPermissionsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutPermissionsInput;
}
