import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionChannelIdUserIdCompoundUniqueInput } from "../inputs/PermissionChannelIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("PermissionWhereUniqueInput", {
  isAbstract: true
})
export class PermissionWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => PermissionChannelIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  channelId_userId?: PermissionChannelIdUserIdCompoundUniqueInput | undefined;
}
