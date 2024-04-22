import { useState, useEffect } from "react";
import { fetchUnvalidatedPeppers } from "../api/client";
import Pepper from "../interfaces/PepperInterface";
import ValidatePepperCard from "../Components/Cards/ValidatePepperCard";

function ValidatePeppersPage() {

    const user: string = localStorage.getItem("user") || "";
    const [peppers, setPeppers] = useState<Pepper[]>([]);

    useEffect(() => {
        if (user != "") {
            const access_token: string = JSON.parse(user).access_token;
            fetchUnvalidatedPeppers(setPeppers, access_token);
        }
    }, [user]);

    return (
        <div>
            <h1>Validate Peppers Page</h1>
            {peppers.map((pepper: Pepper) => {
                return (
                    <ValidatePepperCard pepper={pepper} key={pepper.uuid + "card"} />
                );
            })}
        </div>
    );
}

export default ValidatePeppersPage;
