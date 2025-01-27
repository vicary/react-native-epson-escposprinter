/**
 * GQty: You can safely modify this file based on your needs.
 */

import { createReactClient } from "@gqty/react";
import {
  Cache,
  createClient,
  defaultResponseHandler,
  type QueryFetcher,
} from "gqty";
import { createClient as createSubscriptionsClient } from "graphql-ws";
import {
  type GeneratedSchema,
  generatedSchema,
  scalarsEnumsHash,
} from "./schema.generated";

const queryFetcher: QueryFetcher = async function (
  { query, variables, operationName, extensions },
  fetchOptions,
) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const token = extensions?.token;
  if (token) {
    headers["authorization"] = `${token}`;
  }

  // Modify "https://gql.omniwe.com" if needed
  const response = await fetch("https://gql.omniwe.com", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  return await defaultResponseHandler(response);
};

const subscriptionsClient =
  typeof window !== "undefined"
    ? createSubscriptionsClient({
        lazy: true,
        url: () => {
          // Modify if needed
          const url = new URL("https://gql.omniwe.com", window.location.href);
          url.protocol = url.protocol.replace("http", "ws");
          return url.href;
        },
      })
    : undefined;

const cache = new Cache(
  undefined,
  /**
   * Default option is immediate cache expiry but keep it for 5 minutes,
   * allowing soft refetches in background.
   */
  {
    maxAge: 1500,
    staleWhileRevalidate: 5 * 60 * 1000,
    normalization: true,
  },
);

export const client = createClient<GeneratedSchema>({
  schema: generatedSchema,
  scalars: scalarsEnumsHash,
  cache,
  fetchOptions: {
    fetcher: queryFetcher,
    subscriber: subscriptionsClient,
  },
});

// Core functions
export const { resolve, subscribe, schema } = client;

// Legacy functions
export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
  track,
} = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
  useSubscription,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Enable Suspense, you can override this option for each hook.
    suspense: true,
  },
});

export * from "./schema.generated";
