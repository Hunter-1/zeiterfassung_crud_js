import {
  ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
} from "@apollo/client";
import GetTimestamp from "./Components/GetTimestamp";
import GetCategory from "./Components/GetCategory";
import SetTimestamp from "./Components/SetTimestamp";
import DeleteTimestamp from "./Components/DeleteTimestamp";
import UpdateTimestamp from "./Components/UpdateTimestamp";

const uri = new HttpLink({ uri: "http://localhost:4000/graphql"})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uri,
})

function App() {
  return <ApolloProvider client={client}>
    <SetTimestamp></SetTimestamp>
    <UpdateTimestamp></UpdateTimestamp>
    <DeleteTimestamp></DeleteTimestamp>
    <GetTimestamp></GetTimestamp>
    <GetCategory></GetCategory>
  </ApolloProvider>;
}

export default App;