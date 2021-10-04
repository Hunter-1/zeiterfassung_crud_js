import React, {useEffect, useState} from "react"
import {useMutation, useQuery} from "@apollo/client";
import {GetCategories, UpdateTimestampMutation} from "./requests";
import checkTime from "./checkTime";


function UpdateTimestamp() {
    const [id, setId] = useState(0)
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState(1);

    const {data} = useQuery(GetCategories)
    const [categories, setCategories] = useState([])
    const [updateTimestamp] = useMutation(UpdateTimestampMutation);

    useEffect(() => {
        if (data) {
            setCategories(data.allCategories.nodes)
        }

    }, [data]);

    function selectCategory() {
        const select = document.getElementById("categories");
        setCategory(select.options[select.selectedIndex].value);
    }

    return (
        <div>
            <h1>Update Timestamp</h1>
            <div className="form">
                <label>
                    Timestamp Id
                </label>
                <input id="id" type="number" onChange={(x) => {
                    setId(x.target.value);
                }}
                       />
                <label>
                    Start Time
                </label>
                <input id="start" type="datetime-local" min="1970-00-00T00:00" max="2999-12-31T23:59"
                       onChange={(x) => {
                           setStart(x.target.value.toString());
                       }}/>
                <label>
                    End Time
                </label>
                <input type="datetime-local" min="1970-00-00T00:00" max="2999-12-31T23:59"
                       onChange={(x) => {
                    setEnd(x.target.value.toString());
                }}/>
                <label>
                    Description
                </label>
                <input type="text" onChange={(x) => {
                    setDescription(x.target.value);
                }}/>
                <label>
                    Category
                </label>
                <select id="categories" onChange={selectCategory}>
                    {categories.map((category) =>
                        <option key={category.id} value={category.id}>{category.name}</option>
                    )}
                </select>
                <button onClick={() => {
                    if (checkTime(start,end)) {
                        updateTimestamp({
                            "variables": {
                                "id": Number(id), "start": start, "end": end,
                                "description": description, "category": category
                            }
                        })
                        window.location.reload()
                    }
                }}>Update Timestamp</button>
            </div>
        </div>
    )
}

export default UpdateTimestamp;