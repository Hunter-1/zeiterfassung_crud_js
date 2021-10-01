import {useQuery} from "@apollo/client"
import React, {useEffect, useState} from "react"
import {GetCategories} from "./requests";


function GetCategory() {
    const {data} = useQuery(GetCategories)
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        if (data){
            setCategories(data.allCategories.nodes)
        }

    }, [categories, data]);
    return(<div>
            <h1>Categories</h1>
            {categories.map((category)=> {
                return <div id="categoryList" key={category.id}>
                    <p>{category.id}</p>
                    <p>{category.name}</p>
                </div>
            })}
        </div>
    );
}




export default GetCategory