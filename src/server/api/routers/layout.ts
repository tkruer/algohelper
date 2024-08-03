import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { constantMap } from "~/utils/constants/constants";

export const layoutRouter = createTRPCRouter({
  map: publicProcedure
    .query(() => {
      return {
        map: constantMap,
      }
    }),
});
