import React from 'react'
import {useState,useEffect} from "react";
import {useLoaderData} from "react-router-dom";

const Github = () => {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/madhuaditya')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    return (
        <div>
            <h1>Github : {data.followers}</h1>
            <img src={data.avatar_url} alt="piture"/>

        </div>
    )
}
export default Github
export const gitdataInfo =  async  () => {
    const promiss= await fetch('https://api.github.com/users/madhuaditya')

    return promiss.json()
}
