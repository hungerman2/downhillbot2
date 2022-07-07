import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionCreateInput } from "../../../inputs/PermissionCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePermissionArgs {
  @TypeGraphQL.Field(_type => PermissionCreateInput, {
    nullable: false
  })
  data!: PermissionCreateInput;
}
