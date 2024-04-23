import { useState, useEffect } from "react";
import { fetchUnvalidatedPeppers, getAccessToken, validatePepper } from "../api/client";
import Pepper from "../interfaces/PepperInterface";
import ValidatePepperCard from "../Components/Cards/ValidatePepperCard";

function ValidatePeppersPage() {

    const user: string = localStorage.getItem("user") || "";
    const accessToken: string = getAccessToken();
    const [peppers, setPeppers] = useState<Pepper[]>([]);

    useEffect(() => {
        if (user != "") {
            fetchUnvalidatedPeppers(setPeppers, accessToken);
        }
    }, [user]);

    const handleValidation = (uuid: string) => {
        validatePepper(uuid, accessToken);
        fetchUnvalidatedPeppers(setPeppers, accessToken);
    }

    return (
        <div>
            <h1>Validate Peppers Page</h1>
            {peppers.map((pepper: Pepper) => {
                return (
                    <ValidatePepperCard
                        pepper={pepper}
                        key={pepper.uuid + "card"}
                        handleValidation={handleValidation}
                    />
                );
            })}
        </div>
    );
}

export default ValidatePeppersPage;
