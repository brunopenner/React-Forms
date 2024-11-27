import { useState } from "react"

export default function SignupForm () {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }

    const handleSubmit = () => {
        console.log(firstName, lastName);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" placeholder="First Name" value={firstName}
            onChange={updateFirstName}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" value={lastName}
            onChange={updateLastName}/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}