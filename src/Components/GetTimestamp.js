import {gql, useQuery} from "@apollo/client"
import React, {useEffect, useState} from "react"

const GetTimestamps = gql`
query getTimestamps {
  timestamps {
    id
    start
    end
    description
  }
}
`
function GetTimestamp() {
    const {data} = useQuery(GetTimestamps)
    const [timestamps, setTimestamps] = useState([])
    useEffect(()=>{
        if (data){
            setTimestamps(data.timestamps)
        }

    }, [data]);
    return(<div>
            <h1>List of Timestamps</h1>
        {timestamps.map((timestamp)=> {
            console.log(timestamp)
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