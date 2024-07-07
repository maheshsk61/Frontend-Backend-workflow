import React, { useEffect, useState } from "react";
import axios from "axios"
function PosteddataGET() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('http://localhost:2000/data/employeedata')
            .then((res) => {
                console.log(res);
                setData(res.data)
            })
            .catch((e) => {
                setError("Error while fetching data " + e)
            })
    }, [])
    return (
        <div>
            <h1>Posted Data</h1><p> do refresh to get posted data</p>
            {
                data.length > 0 ? (
                    <ol>
                    {
                        data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <b> Firstname: </b>{item.fname},
                                    <b> Lastname: </b>{item.lname}
                                </li>
                            )
                        })
                    }
                </ol>
                ) :
                    <h1>No Data Posted Yet</h1>
            }
            <h1>{error && error}</h1>
        </div>
    )
}
export default PosteddataGET