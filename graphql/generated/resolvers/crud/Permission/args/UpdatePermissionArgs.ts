import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionUpdateInput } from "../../../inputs/PermissionUpdateInput";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePermissionArgs {
  @TypeGraphQL.Field(_type => PermissionUpdateInput, {
    nullable: false
  })
  data!: PermissionUpdateInput;

  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;
}
