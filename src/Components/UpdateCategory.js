import React, {useState} from "react"
import {gql, useMutation} from "@apollo/client";

function UpdateCategory() {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")

    const MutationCategory = gql`
        mutation UpdateCategory($input: UpdateCategory!) {
            updateCategory(input: $input){
                name
            }
        }
    `
    const [updateCategory] = useMutation(MutationCategory)

    return (
        <div>
            <h1>Update Category</h1>
            <div>
                <label>Category Id</label>
                <input type="number" min="1" onChange={(x)=>{
                    setId(Number(x.target.value));
                }}/>
                <label>
                    Category Name
                </label>
                <input type="text" onChange={(x) => {
                    setName(x.target.value);
                }}>
                </input>
                <button onClick={() => {
                    updateCategory({variables: {input: {id,newName:name}}})
                    window.location.reload();
                }}>Update Category</button>
            </div>
        </div>
    )
}
export default UpdateCategory