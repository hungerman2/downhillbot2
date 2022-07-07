import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";
import { RoleCount } from "../resolvers/outputs/RoleCount";

@TypeGraphQL.ObjectType("Role", {
  isAbstract: true
})
export class Role {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => RoleCount, {
    nullable: true
  })
  _count?: RoleCount | null;
}
