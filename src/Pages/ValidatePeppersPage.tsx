import { useState, useEffect } from "react";
import { deletePepper, fetchUnvalidatedPeppers, getAccessToken, validatePepper } from "../api/client";
import Pepper from "../interfaces/PepperInterface";
import ValidatePepperCard from "../Components/Cards/ValidatePepperCard";

function ValidatePeppersPage() {

    const user: string = localStorage.getItem("user") || "";
    const accessToken: string = getAccessToken();
    const [peppers, setPeppers] = useState<Pepper[]>([]);

    const [failText, setFailText] = useState<string>("");

    useEffect(() => {
        if (user !== "") {
            fetchUnvalidatedPeppers(setPeppers, accessToken)
                .catch(() => setFailText("Failed to fetch unvalidated peppers"));
        }
    }, [user]); // Removed the second argument from the useEffect hook

    const handleValidation = (uuid: string) => {
        validatePepper(uuid, accessToken)
            .catch(() => setFailText("Failed to validate pepper"));
        fetchUnvalidatedPeppers(setPeppers, accessToken);
    }

    const handleRejection = (uuid: string) => {
        deletePepper(uuid, accessToken)
            .catch(() => setFailText("Failed to delete pepper"));
        fetchUnvalidatedPeppers(setPeppers, accessToken);
    }

    return (
        <div>
            <h1>Validate Peppers Page</h1>
            {peppers.length > 0 ? peppers.map((pepper: Pepper) => {
                return (
                    <div>
                        {failText && <div className="bg-red-600">{failText}</div>}
                        <ValidatePepperCard
                            pepper={pepper}
                            key={pepper.uuid + "card"}
                            handleValidation={handleValidation}
                            handleRejection={handleRejection}
                        />
                    </div>
                );
            }) : <div>No peppers to validate</div>}
        </div>
    );
}

export default ValidatePeppersPage;
