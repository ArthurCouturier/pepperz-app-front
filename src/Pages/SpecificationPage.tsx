import Pepper from "../interfaces/PepperInterface.ts";
import {useParams} from "react-router-dom";
import {fetchPeppersWithSpecification} from "../api/client.ts";
import {useEffect, useState} from "react";

function SpecificationPage() {

    const { specification } = useParams<{ specification: string }>();
    const [peppers, setPeppers] = useState<Pepper[]>([]);

    useEffect(() => {
        fetchPeppersWithSpecification(specification, setPeppers);
    }, [specification]);

    return (
        <div className={"flex flex-col justify-between items-center"}>
            <div className="flex flex-col font-bold text-3xl my-5">
                Liste des poivres au caractère {specification?.toLowerCase()}
            </div>
            {peppers.map((pepper: Pepper) => {
                return (
                    <a href={`/pepper/${pepper.uuid}`} className={"flex"}>
                        {pepper.name}
                    </a>
                );
            })}
        </div>
    )
}

export default SpecificationPage;
