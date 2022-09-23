import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8eny4ir304701up3nn3aw2r/master",
  cache: new InMemoryCache(),
});

export default client;
