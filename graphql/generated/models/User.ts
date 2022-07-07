import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Emote } from "../models/Emote";
import { Permission } from "../models/Permission";
import { Poll } from "../models/Poll";
import { Role } from "../models/Role";
import { Grade } from "../enums/Grade";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  nickname?: string | null;

  roles?: Role[];

  permissions?: Permission[];

  emotes?: Emote[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isAdmin!: boolean;

  @TypeGraphQL.Field(_type => Grade, {
    nullable: false
  })
  grade!: "NONE" | "NORMAL" | "ELITE" | "PRO";

  polls?: Poll[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
