import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;
}
