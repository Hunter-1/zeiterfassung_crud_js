import {gql, useQuery} from "@apollo/client"
import React, {useEffect} from "react"

const Get_Zeiteintrags = gql`
query getZeiteintrags {
  allZeiteintrags {
    nodes {
      zeiteintragIndex
      zeitstart
      zeitend
      kategorieIndex
      beschreibung
    }
  }
}
`
function GetZeiteintrag() {
    const {loading, error, data} = useQuery(Get_Zeiteintrags)

    useEffect(()=>{
        console.log(data);
    }, [data])
    return(
        <div>

        </div>
    )
}

export default GetZeiteintrag