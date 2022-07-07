import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoleScalarWhereInput", {
  isAbstract: true
})
export class RoleScalarWhereInput {
  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  AND?: RoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  OR?: RoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RoleScalarWhereInput], {
    nullable: true
  })
  NOT?: RoleScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
