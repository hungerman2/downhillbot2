import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { EmoteUpdateManyWithoutOwnerInput } from "../inputs/EmoteUpdateManyWithoutOwnerInput";
import { EnumGradeFieldUpdateOperationsInput } from "../inputs/EnumGradeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PermissionUpdateManyWithoutUserInput } from "../inputs/PermissionUpdateManyWithoutUserInput";
import { RoleUpdateManyWithoutUsersInput } from "../inputs/RoleUpdateManyWithoutUsersInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutPollsInput", {
  isAbstract: true
})
export class UserUpdateWithoutPollsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  nickname?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => RoleUpdateManyWithoutUsersInput, {
    nullable: true
  })
  roles?: RoleUpdateManyWithoutUsersInput | undefined;

  @TypeGraphQL.Field(_type => PermissionUpdateManyWithoutUserInput, {
    nullable: true
  })
  permissions?: PermissionUpdateManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => EmoteUpdateManyWithoutOwnerInput, {
    nullable: true
  })
  emotes?: EmoteUpdateManyWithoutOwnerInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isAdmin?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumGradeFieldUpdateOperationsInput, {
    nullable: true
  })
  grade?: EnumGradeFieldUpdateOperationsInput | undefined;
}
