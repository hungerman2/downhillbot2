import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumGradeFilter } from "../inputs/NestedEnumGradeFilter";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.InputType("EnumGradeFilter", {
  isAbstract: true
})
export class EnumGradeFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumGradeFilter, {
    nullable: true
  })
  not?: NestedEnumGradeFilter | undefined;
}
