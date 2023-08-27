import { FastifyInstance } from "fastify";

import { verifyJwt } from "@/http/middlewares/verify-jwt";

import { nearby } from "./nearby";
import { create } from "./create";
import { search } from "./search";

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJwt);
  app.get("/gyms/search", search);
  app.get("/gyms/nearby", nearby);

  app.post("/gyms", create);
}
