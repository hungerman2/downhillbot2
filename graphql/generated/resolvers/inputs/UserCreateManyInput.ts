import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.InputType("UserCreateManyInput", {
  isAbstract: true
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @TypeGraphQL.Field(_type => Grade, {
    nullable: false
  })
  grade!: "NONE" | "NORMAL" | "ELITE" | "PRO";
}
