import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionWhereUniqueInput } from "../../../inputs/PermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePermissionArgs {
  @TypeGraphQL.Field(_type => PermissionWhereUniqueInput, {
    nullable: false
  })
  where!: PermissionWhereUniqueInput;
}
