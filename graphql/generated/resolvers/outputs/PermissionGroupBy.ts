import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionAvgAggregate } from "../outputs/PermissionAvgAggregate";
import { PermissionCountAggregate } from "../outputs/PermissionCountAggregate";
import { PermissionMaxAggregate } from "../outputs/PermissionMaxAggregate";
import { PermissionMinAggregate } from "../outputs/PermissionMinAggregate";
import { PermissionSumAggregate } from "../outputs/PermissionSumAggregate";

@TypeGraphQL.ObjectType("PermissionGroupBy", {
  isAbstract: true
})
export class PermissionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  channelId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  allowed!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  denied!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => PermissionCountAggregate, {
    nullable: true
  })
  _count!: PermissionCountAggregate | null;

  @TypeGraphQL.Field(_type => PermissionAvgAggregate, {
    nullable: true
  })
  _avg!: PermissionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PermissionSumAggregate, {
    nullable: true
  })
  _sum!: PermissionSumAggregate | null;

  @TypeGraphQL.Field(_type => PermissionMinAggregate, {
    nullable: true
  })
  _min!: PermissionMinAggregate | null;

  @TypeGraphQL.Field(_type => PermissionMaxAggregate, {
    nullable: true
  })
  _max!: PermissionMaxAggregate | null;
}
