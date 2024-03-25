import {useEffect, useState} from "react";
import PepperLine from "../Components/PepperLine.tsx";
import PepperTypeNames from "../utils/PepperTypeNames.ts";
import Pepper from "../interfaces/PepperInterface.ts";
import {deletePepperHandler, fetchPeppers} from "../api/client.ts";

function Home() {

    const [peppers, setPeppers] = useState<Pepper[]>([]);
    
    useEffect(() => {
        fetchPeppers(setPeppers);
    }, []);

    const pepperTypes = Object.keys(PepperTypeNames).filter((v) => isNaN(Number(v)))

    return (
        <>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"flex flex-col items-center justify-center"}>
                    {pepperTypes.map(type => (
                        <PepperLine
                            key={type}
                            peppers={peppers.filter(pepper => pepper.type === type)}
                            deletePepperHandler={(uuid: string) => deletePepperHandler(uuid, setPeppers)}
                            fetchPeppers={() => fetchPeppers(setPeppers)}
                            type={type}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;
