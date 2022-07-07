import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteWhereInput } from "../../../inputs/EmoteWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmoteArgs {
  @TypeGraphQL.Field(_type => EmoteWhereInput, {
    nullable: true
  })
  where?: EmoteWhereInput | undefined;
}
