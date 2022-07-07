import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;
}
