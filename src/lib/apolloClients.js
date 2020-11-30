import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/link-context";

import { SYSTEM_URL } from "../config";

const httpSystemLink = createHttpLink({
  uri: SYSTEM_URL, // Server URL (must be absolute)
  credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem("userToken");
  const token = "WB6nWF8mHR0SNjPdtopuFMzabTGAhivs7BGdKuXeKyFweeWYPS18OTo6bv3T8dkfR3tfaeaxve8assCAz1JQo1Q4ymYL7oyNhV73iVhxpOw4rQAPtYD3NzCnc9CDRJBMdwU6CdhJjdnkUmWBxwK9gsrfAnmbOODdYG5o";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});


// clients
export const apolloSystemClient = new ApolloClient({
  link: authLink.concat(httpSystemLink),
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});
