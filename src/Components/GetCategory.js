import {gql, useQuery} from "@apollo/client"
import React, {useEffect, useState} from "react"

const GetCategories = gql`
query getCategories {
  categories {
    id
    name
  }
}
`
function GetCategory() {
    const {data} = useQuery(GetCategories)
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        if (data){
            console.log(categories)
            setCategories(data.categories)
        }

    }, [categories, data]);
    return(<div>
            <h1>Categories</h1>
            {categories.map((category)=> {
                console.log(category)
                return <div id="categoryList" key={category.id}>
                    <p>{category.id}</p>
                    <p>{category.name}</p>
                </div>
            })}
        </div>
    );
}




export default GetCategory