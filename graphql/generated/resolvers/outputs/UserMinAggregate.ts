import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Grade } from "../../enums/Grade";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isAdmin!: boolean | null;

  @TypeGraphQL.Field(_type => Grade, {
    nullable: true
  })
  grade!: "NONE" | "NORMAL" | "ELITE" | "PRO" | null;
}
