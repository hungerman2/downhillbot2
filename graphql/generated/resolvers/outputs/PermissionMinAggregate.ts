import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PermissionMinAggregate", {
  isAbstract: true
})
export class PermissionMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  channelId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  allowed!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  denied!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  userId!: string | null;
}
