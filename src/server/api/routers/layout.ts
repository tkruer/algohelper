import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

import { mapConstants } from "~/utils/constants/constants";

export const layoutRouter = createTRPCRouter({
  getProblemMap: publicProcedure
    .query(() => {
      return mapConstants;
    }),
});
