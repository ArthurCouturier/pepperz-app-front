import {useState} from "react";
import Button from "./Button.tsx";
import axios from "axios";

function NewUserForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const clickAddUserHandler = async () => {
        if (name != "" && email != "" && password != "") {
            const data = {"name": name, "email": email, "password": password};
            const response = await axios.post('https://pepperz-back.vercel.app/api/users/create', data);
            return response.data;
        }
    }

    return (
        <div className={"flex flex-col w-1/4 mx-5"}>
            <input value={name} onChange={(e) => setName(e.target.value)}
                   placeholder="Enter name"
                   className={"my-2"}
            />
            <input value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="Enter email"
                   className={"my-2"}
            />
            <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="Enter password"
                   className={"my-2"}
            />
            <Button onClick={clickAddUserHandler} className={"text-xs p-0.5 my-2"}>
                Créer mon compte
            </Button>
        </div>
    )
}

export default NewUserForm;
