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
import SetCategory from "./Components/SetCategory";
import DeleteCategory from "./Components/DeleteCategory";
import UpdateCategory from "./Components/UpdateCategory";


const Postgraphileuri = new HttpLink({uri: "http://localhost:5000/graphql"})
const Graphqluri = new HttpLink({ uri: "http://localhost:4000/graphql"})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: Postgraphileuri,
})

function App() {
  return <ApolloProvider client={client}>
    <SetTimestamp/>
    <UpdateTimestamp/>
    <DeleteTimestamp/>
    <GetTimestamp/>
    <SetCategory/>
    <UpdateCategory/>
    <DeleteCategory/>
    <GetCategory/>
  </ApolloProvider>;
}

export default App;