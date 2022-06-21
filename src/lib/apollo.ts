import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o94quc1erb01xi45oa16v8/master',
  cache: new InMemoryCache()
});