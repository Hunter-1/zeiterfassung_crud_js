import {useQuery} from "@apollo/client"
import React, {useEffect, useState} from "react"
import {GetTimestampsCategories} from "./requests";

function GetTimestamp() {
    const {data} = useQuery(GetTimestampsCategories)
    const [timestamps, setTimestamps] = useState([])
    const [category, setCategory] = useState([])
    useEffect(()=>{
        if (data){
            setTimestamps(data.allTimestamps.nodes)
            setCategory(data.allCategories.nodes)
        }

    }, [data]);
    return(<div className="list">
            <h1>List of Timestamps</h1>
        {timestamps.map((timestamp)=> {
            return <div className="item" key={timestamp.id}>
                <p>ID: {timestamp.id}</p>
                <p>Start Time: {timestamp.start}</p>
                <p>End Time: {timestamp.end}</p>
                <p>Description: {timestamp.description}</p>
                <p>Category: {
                    category.find(x => x.id === timestamp.category).name

                }</p>
            </div>
        })}
    </div>
    );
}

export default GetTimestamp