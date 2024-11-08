import "server-only";

import { cache } from "react";
import { cookies } from "next/headers";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session: { userId: number } | null = cookie ? JSON.parse(cookie) : null;

  if (session?.userId !== 123) {
    return { isAuth: false, userId: null };
  }

  return { isAuth: true, userId: session.userId };
});
