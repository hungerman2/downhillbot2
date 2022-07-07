import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmoteCreateManyInput } from "../../../inputs/EmoteCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmoteArgs {
  @TypeGraphQL.Field(_type => [EmoteCreateManyInput], {
    nullable: false
  })
  data!: EmoteCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
