import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteCreateInput } from "../../../inputs/EmoteCreateInput";

@TypeGraphQL.ArgsType()
export class CreateEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteCreateInput, {
    nullable: false
  })
  data!: EmoteCreateInput;
}
