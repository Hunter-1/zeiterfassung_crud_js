import {useQuery} from "@apollo/client"
import React, {useEffect, useState} from "react"
import {GetTimestamps} from "./requests";


function GetTimestamp() {
    const {data} = useQuery(GetTimestamps)
    const [timestamps, setTimestamps] = useState([])
    useEffect(()=>{
        if (data){
            setTimestamps(data.allTimestamps.nodes)
        }

    }, [data]);
    return(<div>
            <h1>List of Timestamps</h1>
        {timestamps.map((timestamp)=> {
            return <div id="timestamp" key={timestamp.id}>
                <p>{timestamp.id}</p>
                <p>{timestamp.start}</p>
                <p>{timestamp.end}</p>
                <p>{timestamp.description}</p>
            </div>
        })}
    </div>
    );
}

export default GetTimestamp