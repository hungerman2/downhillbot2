import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteCreateInput } from "../../../inputs/EmoteCreateInput";
import { EmoteUpdateInput } from "../../../inputs/EmoteUpdateInput";
import { EmoteWhereUniqueInput } from "../../../inputs/EmoteWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereUniqueInput, {
    nullable: false
  })
  where!: EmoteWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmoteCreateInput, {
    nullable: false
  })
  create!: EmoteCreateInput;

  @TypeGraphQL.Field(_type => EmoteUpdateInput, {
    nullable: false
  })
  update!: EmoteUpdateInput;
}
