import NewUserForm from "../Components/NewUserForm.tsx";
import LoginForm from "../Components/LoginForm.tsx";
import {useState} from "react";
import User from "../models/User.ts";

function Profile() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(new User("", "", ""));

    const setLogInfo = () => {
        const name: string = localStorage.getItem("name") || "";
        const email: string = localStorage.getItem("email") || "";
        const password: string = localStorage.getItem("password") || "";
        const user: User = new User(name, email, password);
        setLoggedIn(true);
        return setUser(user);
    }

    return loggedIn ? (
        <div className={"flex items-center justify-center my-2"}>
            Logged in
            {user.name}
        </div>
    ) : (
        <div className={"flex items-center justify-center"}>
            <NewUserForm />
            or
            <LoginForm setLogInfo={setLogInfo} />
        </div>
    )
}

export default Profile;
