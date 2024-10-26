import { useState } from "react";

export function Login() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        setData((d) => {
            const updatedData = {
                ...d,
                [name]: type === "checkbox" ? checked : value
            }

            return updatedData
        })
    }

    return (
        <div>
            <label>Username</label>
            <input name="username" type="text" value={data.username} onChange={handleInputChange} />
            <label>Password</label>
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <label>Remember</label>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}