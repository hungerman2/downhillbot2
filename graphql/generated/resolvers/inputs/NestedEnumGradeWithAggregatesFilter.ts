import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGradeFilter } from "../inputs/NestedEnumGradeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.InputType("NestedEnumGradeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumGradeWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Grade, {
    nullable: true
  })
  equals?: "NONE" | "NORMAL" | "ELITE" | "PRO" | undefined;

  @TypeGraphQL.Field(_type => [Grade], {
    nullable: true
  })
  in?: Array<"NONE" | "NORMAL" | "ELITE" | "PRO"> | undefined;

  @TypeGraphQL.Field(_type => [Grade], {
    nullable: true
  })
  notIn?: Array<"NONE" | "NORMAL" | "ELITE" | "PRO"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGradeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumGradeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGradeFilter, {
    nullable: true
  })
  _min?: NestedEnumGradeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumGradeFilter, {
    nullable: true
  })
  _max?: NestedEnumGradeFilter | undefined;
}
