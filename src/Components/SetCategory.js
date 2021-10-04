import React, {useState} from "react"
import {useMutation} from "@apollo/client";
import {CreateCategory} from "./requests"

function SetCategory() {
    const [name, setName] = useState("")

    const [createCategory] = useMutation(CreateCategory)

    return (
        <div>
            <h1>Create Category</h1>
            <div className="form">
                <label>
                    Category Name
                </label>
                <input type="text" onChange={(x) => {
                    setName(x.target.value);
                }}>
                </input>
                <button onClick={() => {
                    createCategory({variables: {name}})
                    window.location.reload();
                }}>Create Category</button>
            </div>
        </div>
    )
}
export default SetCategory