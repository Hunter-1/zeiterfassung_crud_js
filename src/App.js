import {
  ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error"
import GetZeiteintrag from "./Components/GetZeiteintrag";

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert(`graphql error ${message}`)
    })
  }
})

const uri = new HttpLink({ uri: "http://localhost:5000/graphql"})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uri,
})

function App() {
  return <ApolloProvider client={client}>
  <GetZeiteintrag>

  </GetZeiteintrag>
  </ApolloProvider>;
}

export default App;