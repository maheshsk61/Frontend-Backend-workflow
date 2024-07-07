import React, { useEffect, useState } from "react";
import axios from "axios"
function DummydataGET() {
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('http://localhost:2000/data/dummydata')
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
            <h1>Dummy Data</h1>
            {
                data.length > 0 ? (
                    <ol>
                        {
                            data.map((item) => {
                                return <li key={item.id}>
                                    <b> Name : </b>{item.name},
                                    <b> Age : </b>{item.age},
                                    <b> Occupation : </b>{item.occupation}
                                </li>
                            })
                        }
                    </ol>
                ) : <h1>{error && error}</h1>
            }
        </div>
    )
}
export default DummydataGET