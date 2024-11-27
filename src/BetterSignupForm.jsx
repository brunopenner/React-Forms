import { useState } from "react"

export default function BetterSignupForm () {
    const [formData, setFormData] = useState({firtsName: "", lastName: "", password: ""})

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData( currData => {
            // currData[changedField] = newValue;
            // return {...currData};
            return {
                ...currData,
                [changedField]: newValue,
            };
        });
    };

    const handleSubmit = () => {
        console.log(firstName, lastName);
    }

    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstName" id="firstname" placeholder="First Name" value={formData.firstName}
            onChange={handleChange}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastName" id="lastname" placeholder="Last Name" value={formData.lastName}
            onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" value={formData.password}
            onChange={handleChange}/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}