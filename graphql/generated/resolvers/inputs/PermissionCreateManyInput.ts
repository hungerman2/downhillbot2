import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionCreateManyInput", {
  isAbstract: true
})
export class PermissionCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;
}
