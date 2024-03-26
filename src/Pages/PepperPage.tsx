import {Params, useParams} from "react-router-dom";
import Pepper from "../interfaces/PepperInterface.ts";
import {getPepper} from "../api/client.ts";
import {useEffect, useState} from "react";
import EditSVG from "../Components/SVGs/EditSVG.tsx";

function PepperPage() {

    const {pepperUuid}: Readonly<Params<string>> = useParams<{ pepperUuid: string }>();
    const [pepper, setPepper] = useState<Pepper | null>(null);

    useEffect(() => {
        if (pepperUuid) {
            const fetchPepper = async () => {
                const fetchedPepper = await getPepper(pepperUuid);
                setPepper(fetchedPepper);
            };
            fetchPepper();
        }
    }, [pepperUuid]);

    if (!pepperUuid) {
        return <div>No pepper UUID provided</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center mx-5 my-5">
                <div className="flex items-center">
                    {/* On crée une div similaire invisible pour équilibrer et bien centrer le titre */}
                    <div className="flex-1 invisible">
                        <EditSVG />
                    </div>
                    <div className="text-5xl font-bold text-center mx-3">{pepper?.name}</div>
                    <div className="flex-1 flex justify-end">
                        <EditSVG href={`/pepper/${pepperUuid}`} />
                    </div>
                </div>
                <div className="text-2xl mt-3">{pepper?.type}</div>
                <div className="mt-1">{pepper?.origin}</div>
                <div className="text-2xl mt-3">{pepper?.desc}</div>
                <div className="mt-1">
                    {pepper?.specifications ? "Specifications: " + pepper.specifications : "Ce poivre n'a pas de spécification"}
                </div>
                <div className="mt-1">{pepper?.kgPrice && `${pepper.kgPrice} €/kg`}</div>
            </div>
        </>
    )
}

export default PepperPage;
