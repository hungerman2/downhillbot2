import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PermissionUpdateManyMutationInput } from "../../../inputs/PermissionUpdateManyMutationInput";
import { PermissionWhereInput } from "../../../inputs/PermissionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPermissionArgs {
  @TypeGraphQL.Field(_type => PermissionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PermissionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PermissionWhereInput, {
    nullable: true
  })
  where?: PermissionWhereInput | undefined;
}
