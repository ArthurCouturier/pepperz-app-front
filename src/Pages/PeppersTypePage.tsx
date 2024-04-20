import { Params, useParams } from "react-router-dom";
import { getPepperTypeName } from "../utils/PepperTypeNames.ts";
import { useEffect, useState } from "react";
import Pepper from "../interfaces/PepperInterface.ts";
import { fetchPeppers } from "../api/client.ts";
import PepperCard from "../Components/Cards/PepperCard.tsx";

function PeppersTypePage() {

    const { pepperType }: Readonly<Params<string>> = useParams<{ pepperType: string }>();
    const type: string = getPepperTypeName(pepperType as string);

    const [peppers, setPeppers] = useState<Pepper[]>([]);

    useEffect(() => {
        fetchPeppers(setPeppers)
            .then(peppers => setPeppers(peppers.filter(pepper => (pepper.type === pepperType))));
    }, [pepperType, peppers]);

    return (
        <div className="flex justify-center">
            <div className="my-5 font-bold w-full max-w-6xl">
                <div className="text-3xl mb-4">
                    Tous les poivres {type.toLowerCase()}s
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {peppers.map(pepper => <PepperCard className="flex" pepperJson={pepper} />)}
                </div>
            </div>
        </div>

    )
}

export default PeppersTypePage;
