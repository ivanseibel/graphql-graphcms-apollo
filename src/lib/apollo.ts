import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    cache: new InMemoryCache(),
    headers: {
      'Authorization': `Bearer ${import.meta.env.VITE_GRAPH_CMS_API_KEY}`
    }
});