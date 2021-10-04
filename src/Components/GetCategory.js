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
    return(<div className="list">
            <h1>Categories</h1>
            {categories.map((category)=> {
                return <div className="item" key={category.id}>
                    <p>ID: {category.id}</p>
                    <p>Name: {category.name}</p>
                </div>
            })}
        </div>
    );
}




export default GetCategory