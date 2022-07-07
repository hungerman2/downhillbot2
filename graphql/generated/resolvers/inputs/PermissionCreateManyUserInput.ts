import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PermissionCreateManyUserInput", {
  isAbstract: true
})
export class PermissionCreateManyUserInput {
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
}
