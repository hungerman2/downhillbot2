import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteCreateNestedManyWithoutOwnerInput } from "../inputs/EmoteCreateNestedManyWithoutOwnerInput";
import { PermissionCreateNestedManyWithoutUserInput } from "../inputs/PermissionCreateNestedManyWithoutUserInput";
import { PollCreateNestedManyWithoutAuthorInput } from "../inputs/PollCreateNestedManyWithoutAuthorInput";
import { RoleCreateNestedManyWithoutUsersInput } from "../inputs/RoleCreateNestedManyWithoutUsersInput";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.InputType("UserCreateInput", {
  isAbstract: true
})
export class UserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => RoleCreateNestedManyWithoutUsersInput, {
    nullable: true
  })
  roles?: RoleCreateNestedManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PermissionCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  permissions?: PermissionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EmoteCreateNestedManyWithoutOwnerInput, {
    nullable: true
  })
  emotes?: EmoteCreateNestedManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @TypeGraphQL.Field(_type => Grade, {
    nullable: false
  })
  grade!: "NONE" | "NORMAL" | "ELITE" | "PRO";

  @TypeGraphQL.Field(_type => PollCreateNestedManyWithoutAuthorInput, {
    nullable: true
  })
  polls?: PollCreateNestedManyWithoutAuthorInput | undefined;
}
