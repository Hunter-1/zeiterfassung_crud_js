import React, {useState} from "react"
import {useMutation} from "@apollo/client";
import {UpdateCategoryById} from "./requests";

function UpdateCategory() {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")

    const [updateCategory] = useMutation(UpdateCategoryById)

    return (
        <div >
            <h1>Update Category</h1>
            <div className="form">
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
                    updateCategory({variables: {id,name:name}})
                    window.location.reload();
                }}>Update Category</button>
            </div>
        </div>
    )
}
export default UpdateCategory