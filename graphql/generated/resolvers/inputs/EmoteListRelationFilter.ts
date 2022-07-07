import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmoteWhereInput } from "../inputs/EmoteWhereInput";

@TypeGraphQL.InputType("EmoteListRelationFilter", {
  isAbstract: true
})
export class EmoteListRelationFilter {
  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  every?: EmoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  some?: EmoteWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  none?: EmoteWhereInput | undefined;
}
