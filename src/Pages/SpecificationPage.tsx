import Pepper from "../interfaces/PepperInterface.ts";
import {useParams} from "react-router-dom";
import {fetchPeppersWithSpecification} from "../api/client.ts";
import {useEffect, useState} from "react";
import PepperCard from "../Components/Cards/PepperCard.tsx";

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
            <div className={"grid grid-cols-1 md:grid-cols-2 l:grid-cols-3 xl:grid-cols-4 gap-4"}>
                {peppers.map((pepper: Pepper) => {
                    return (
                        <PepperCard className={"flex"} pepperJson={pepper} />
                    );
                })}
            </div>
        </div>
    )
}

export default SpecificationPage;
