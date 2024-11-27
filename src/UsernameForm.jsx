import { useState } from "react"

export default function UsernameForm () {
    const [username, setUsername] = useState("");
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }

    return (
        <div>
            <input type="text" name="" id="" placeholder="username" value={username}
            onChange={updateUsername}/>
            <button>Submit</button>
        </div>
    )
}