import {gql, useMutation} from "@apollo/client"
import React, {useState} from "react"

const MutationCategory = gql`
    mutation($input: ID!){
        deleteCategory(id: $input) {
            id
        }
    }
`

function DeleteCategory() {
    const [id, setId] = useState(0)
    const [deleteCategory] = useMutation(MutationCategory)

    return(<div>
            <h1>Delete Category by Id</h1>
            <label>Category Id</label>
            <input type="number" min="1" onChange={(x)=>{
                setId(Number(x.target.value));
            }}/>
            <button onClick={() => {
                deleteCategory({variables: {input: id}})
                window.location.reload()
            }}>Delete Category</button>
        </div>
    );
}

export default DeleteCategory