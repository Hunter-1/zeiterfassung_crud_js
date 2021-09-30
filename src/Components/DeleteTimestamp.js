import {gql, useMutation} from "@apollo/client"
import React, {useState} from "react"

const MutationTimestamp = gql`
    mutation($input: ID!){
        deleteTimestamp(id: $input) {
            id
        }
    }
`

function DeleteTimestamp() {
    const [id, setId] = useState(0)
    const [deleteTimestamp] = useMutation(MutationTimestamp)

    return(<div>
            <h1>Delete Timestamp by Id</h1>
            <input type="number" min="1" onChange={(x)=>{
                setId(Number(x.target.value));
            }}/>
            <button onClick={() => {
                deleteTimestamp({variables: {input: id}})
                window.location.reload()
            }}>Delete Timestamp</button>
        </div>
    );
}

export default DeleteTimestamp