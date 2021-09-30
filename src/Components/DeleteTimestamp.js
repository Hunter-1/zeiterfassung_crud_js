import {useMutation} from "@apollo/client"
import React, {useState} from "react"
import {DeleteTimestampById} from "./requests"


function DeleteTimestamp() {
    const [id, setId] = useState(0)
    const [deleteTimestamp] = useMutation(DeleteTimestampById)

    return(<div>
            <h1>Delete Timestamp by Id</h1>
            <input type="number" min="1" onChange={(x)=>{
                setId(Number(x.target.value));
            }}/>
            <button onClick={() => {
                deleteTimestamp({variables: {id: id}})
                window.location.reload()
            }}>Delete Timestamp</button>
        </div>
    );
}

export default DeleteTimestamp