import React, { useState } from "react";
import axios from "axios"
function Post() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [error, setError] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:2000/data/employeedata', {
            fname: firstname,
            lname: lastname
        })
            .then((res) => {
                console.log(res);
                setFirstname('')
                setLastname('')
            })
            .catch((e) => {
                setError("Error while fetching data " + e)
            })
    }
    return (
        <div>
            <h1>Employee Form</h1>
            <form onSubmit={handleSubmit} method="post">
                <label for="fname">Firstname: </label>
                <input type="text" id="fname" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} />
                <br />
                <label for="fname">Lastname: </label>
                <input type="text" id="lname" value={lastname} onChange={(e) => { setLastname(e.target.value) }} />
                <br />
                <button type="submit">submit</button>
            </form>
            <h1>{error && error}</h1>
        </div>
    )
}
export default Post