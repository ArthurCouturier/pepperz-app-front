import axios from "axios";
import {useEffect, useState} from "react";
import PepperLine from "../Components/PepperLine.tsx";
import PepperTypeNames from "../utils/PepperTypeNames.ts";
import Pepper from "../interfaces/PepperInterface.ts";

async function getAllPeppers() {
    const response = await axios.get('https://pepperz-back.vercel.app/api/peppers/getAll');
    return response.data;
}

async function deletePepper(uuid: string) {
    const response = await axios.delete('https://pepperz-back.vercel.app/api/peppers/deleteByUUid/' + uuid);
    return response.data;
}

function Home() {

    const [peppers, setPeppers] = useState<Pepper[]>([]);

    const fetchPeppers = async () => {
        const peppersData = await getAllPeppers();
        setPeppers(peppersData);
    };

    useEffect(() => {
        fetchPeppers();
    }, []);

    const clickPepperHandler = async (uuid: string) => {
        await deletePepper(uuid);
        fetchPeppers();
    }

    const pepperTypes = Object.keys(PepperTypeNames).filter((v) => isNaN(Number(v)))

    return (
        <>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"flex flex-col items-center justify-center"}>
                    {pepperTypes.map(type => (
                        <PepperLine
                            key={type}
                            peppers={peppers.filter(pepper => pepper.type === type)}
                            clickPepperHandler={clickPepperHandler}
                            fetchPeppers={fetchPeppers}
                            type={type}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;
