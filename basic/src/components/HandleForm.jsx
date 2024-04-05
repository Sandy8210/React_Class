import React, { useState } from 'react'

const HandleForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [jobType, setJobType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            username,
            email,
            jobType
        }
        console.log(data);
    }
    return (
        <>
            <div>
                <form onSubmit={(e) => handleSubmit(e)} className='form__field'>
                    <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" placeholder='Enter name' />
                    <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Enter Email' />
                    <select onChange={(e) => { setJobType(e.target.value) }} name="jobtype" >
                        <option value="PartTime">PartTime</option>
                        <option value="FullTime">FullTime</option>
                    </select>
                    <input type="submit" value={"Submit"} />
                </form>
            </div>
            <p>{username}</p>
            <p>{email}</p>
        </>
    )
}

export default HandleForm;