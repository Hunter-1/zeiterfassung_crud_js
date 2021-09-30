import React, {useEffect, useState} from "react"
import {gql, useMutation} from "@apollo/client";

function SetCategory() {
    const [name, setName] = useState("")

    const MutationCategory = gql`
    mutation CreateCategory($input: CreateCategory!) {
        createCategory(input: $input){
            name
        }
    }
    `
    const [createCategory] = useMutation(MutationCategory)

    return (
        <div>
            <h1>Create Category</h1>
            <div>
                <label>
                    Category Name
                </label>
                <input type="text" onChange={(x) => {
                    setName(x.target.value);
                }}>
                </input>
                <button onClick={() => {
                    createCategory({variables: {input: {name}}})
                    window.location.reload();
                }}>Create Category</button>
            </div>
        </div>
    )
}
export default SetCategory