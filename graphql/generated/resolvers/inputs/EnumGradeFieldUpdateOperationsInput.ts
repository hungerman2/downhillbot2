import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.InputType("EnumGradeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumGradeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Grade, {
    nullable: true
  })
  set?: "NONE" | "NORMAL" | "ELITE" | "PRO" | undefined;
}
