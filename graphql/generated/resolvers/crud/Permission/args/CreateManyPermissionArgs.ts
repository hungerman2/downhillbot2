import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionCreateManyInput } from "../../../inputs/PermissionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPermissionArgs {
  @TypeGraphQL.Field(_type => [PermissionCreateManyInput], {
    nullable: false
  })
  data!: PermissionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
