import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteAvgAggregate } from "../outputs/EmoteAvgAggregate";
import { EmoteCountAggregate } from "../outputs/EmoteCountAggregate";
import { EmoteMaxAggregate } from "../outputs/EmoteMaxAggregate";
import { EmoteMinAggregate } from "../outputs/EmoteMinAggregate";
import { EmoteSumAggregate } from "../outputs/EmoteSumAggregate";

@TypeGraphQL.ObjectType("EmoteGroupBy", {
  isAbstract: true
})
export class EmoteGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  count!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  ownerId!: string;

  @TypeGraphQL.Field(_type => EmoteCountAggregate, {
    nullable: true
  })
  _count!: EmoteCountAggregate | null;

  @TypeGraphQL.Field(_type => EmoteAvgAggregate, {
    nullable: true
  })
  _avg!: EmoteAvgAggregate | null;

  @TypeGraphQL.Field(_type => EmoteSumAggregate, {
    nullable: true
  })
  _sum!: EmoteSumAggregate | null;

  @TypeGraphQL.Field(_type => EmoteMinAggregate, {
    nullable: true
  })
  _min!: EmoteMinAggregate | null;

  @TypeGraphQL.Field(_type => EmoteMaxAggregate, {
    nullable: true
  })
  _max!: EmoteMaxAggregate | null;
}
