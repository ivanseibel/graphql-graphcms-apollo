import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/cl5m9p6ga4vku01t7cq2f6b12/master",
    cache: new InMemoryCache(),
});