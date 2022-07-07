import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPermissionArgs {
  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;
}
