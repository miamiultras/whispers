"use client";

import React from "react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

const SessionProvider = ({ children }: React.PropsWithChildren) => (
  <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
);

export default SessionProvider;
