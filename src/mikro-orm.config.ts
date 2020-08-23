import { __dbUsername__, __dbPassword__, __prod__ } from "./constant";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  dbName: "lireddit",
  user: __dbUsername__,
  password: __dbPassword__,
  type: "postgresql",
  debug: !__prod__,
  entities: [Post],
} as Parameters<typeof MikroORM.init>[0];
