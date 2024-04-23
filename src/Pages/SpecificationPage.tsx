import Pepper from "../interfaces/PepperInterface.ts";
import { useParams } from "react-router-dom";
import { fetchPeppersWithSpecification } from "../api/client.ts";
import { useEffect, useState } from "react";
import PepperCard from "../Components/Cards/PepperCard.tsx";

function SpecificationPage() {

    const { specification } = useParams<{ specification: string }>();
    const [peppers, setPeppers] = useState<Pepper[]>([]);

    useEffect(() => {
        fetchPeppersWithSpecification(specification, setPeppers);
    }, [specification]);

    return (
        <div className={"flex justify-center"}>
            <div className="my-5 font-bold w-full max-w-6xl">
                <div className="text-3xl mb-4">
                    Liste des poivres au caractère {specification?.toLowerCase()}
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"}>
                    {peppers.map((pepper: Pepper) => {
                        return (
                            <PepperCard className={"flex"} pepperJson={pepper} key={pepper.uuid} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SpecificationPage;
