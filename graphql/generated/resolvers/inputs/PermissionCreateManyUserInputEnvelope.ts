import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PermissionCreateManyUserInput } from "../inputs/PermissionCreateManyUserInput";

@TypeGraphQL.InputType("PermissionCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class PermissionCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [PermissionCreateManyUserInput], {
    nullable: false
  })
  data!: PermissionCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
