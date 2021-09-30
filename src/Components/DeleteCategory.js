import {useMutation} from "@apollo/client"
import React, {useState} from "react"
import {DeleteCategoryById} from "./requests"

function DeleteCategory() {
    const [id, setId] = useState(0)
    const [deleteCategory] = useMutation(DeleteCategoryById)

    return (<div>
            <h1>Delete Category by Id</h1>
            <div className="form">
                <label>Category Id</label>
                <input type="number" min="1" onChange={(x) => {
                    setId(Number(x.target.value));
                }}/>
                <button onClick={() => {
                    deleteCategory({variables: {id: Number(id)}})
                    window.location.reload()
                }}>Delete Category
                </button>
            </div>
        </div>
    );
}

export default DeleteCategory