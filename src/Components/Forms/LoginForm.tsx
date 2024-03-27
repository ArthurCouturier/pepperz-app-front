import Button from "../Buttons/Button.tsx";
import {useState} from "react";
import axios from "axios";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;

function LoginForm({setLogInfo} : {setLogInfo: () => void }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");


    const clickLoginHandler = async () => {
        if (login != "" && password != "") {
            const data = {"login": login, "password": password};
            const response = await axios.post(backendUrl + '/api/users/login', data);
            if (response.data.type == "success") {
                setLogInfo();
            }
            return response.data
        }
    }

    return (
        <div className={"flex flex-col w-1/4 mx-5"}>
            <div className={"my-2"}>
                J'ai déjà un compte
            </div>
            <input value={login} onChange={(e) => setLogin(e.target.value)}
                   placeholder="Enter name"
                   className={"my-2"}
            />
            <input type={"password"} value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="Enter password"
                   className={"my-2"}
            />
            <Button onClick={clickLoginHandler} className={"text-xs p-0.5 my-2"}>
                Créer mon compte
            </Button>
        </div>
    )
}

export default LoginForm;
