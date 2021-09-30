import React, {useEffect, useState} from "react"
import {gql, useMutation, useQuery} from "@apollo/client";

function checkTime(startTime,endTime){
    const startParsed = Date.parse(startTime);
    const endParsed = Date.parse(endTime);

    console.log(startTime)
    console.log(endTime)
    console.log(startParsed)
    console.log(endParsed)
    console.log(startParsed < endParsed)
    return startParsed < endParsed;
}

function SetTimestamp() {
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState({id: "1"});
    const GetCategories = gql`
    query getCategories {
        categories {
            id
            name
        }
    }
    `
    const MutationTimestamp = gql`
        mutation CreateTimestamp($input: CreateTimestamp) {
            createTimestamp(input: $input){
                start
                end
                description
                category {
                    name
                }
            }
        }
    `
    const {data} = useQuery(GetCategories)
    const [categories, setCategories] = useState([])
    const [createTimestamp] = useMutation(MutationTimestamp);

    useEffect(() => {
        if (data) {
            setCategories(data.categories)
        }

    }, [data]);

    function selectCategory() {
        const select = document.getElementById("categories");
        console.log(select.options[select.selectedIndex].value)
        setCategory({category: {id: select.options[select.selectedIndex].value}});
        console.log(category)
    }

    return (
        <div>
            <h1>Create Timestamp</h1>
            <div>
                <label>
                    Start Time
                </label>
                <input type="datetime-local" min="1970-00-00T00:00" max="2999-12-31T23:59"
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
                <br/>
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
                    if (checkTime(start,end)){
                        createTimestamp({variables: {input: {start, end, description, category}}})
                        window.location.reload();
                    }
                }}>Create Timestamp</button>
            </div>
        </div>
    )
}

export default SetTimestamp;