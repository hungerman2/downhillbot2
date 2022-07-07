import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionCreateInput } from "../../../inputs/PermissionCreateInput";
import { PermissionUpdateInput } from "../../../inputs/PermissionUpdateInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPermissionArgs {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PermissionCreateInput, {
    nullable: false
  })
  create!: PermissionCreateInput;

  @TypeGraphQL.Field(_type => PermissionUpdateInput, {
    nullable: false
  })
  update!: PermissionUpdateInput;
}
