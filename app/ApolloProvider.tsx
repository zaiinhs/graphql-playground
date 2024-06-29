"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/app/lib/apolloClient";

export default function MyApp({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
