import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.HYGRAPH_ENTRYPOINT,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
