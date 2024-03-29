import {Params, useParams} from "react-router-dom";
import Pepper from "../interfaces/PepperInterface.ts";
import {getPepper, updatePepper} from "../api/client.ts";
import {useEffect, useState} from "react";
import EditSVG from "../Components/SVGs/EditSVG.tsx";
import Button from "../Components/Buttons/Button.tsx";
import EditStringField from "../Components/EditFields/EditStringField.tsx";
import PepperTypeNames from "../utils/PepperTypeNames.ts";
import EditSpecificationsLine from "../Components/Lines/EditSpecificationsLine.tsx";

function PepperPage() {

    const {pepperUuid}: Readonly<Params<string>> = useParams<{ pepperUuid: string }>();
    const [pepper, setPepper] = useState<Pepper>({
        uuid: '',
        name: '',
        type: PepperTypeNames.BLACK,
        origin: '',
        desc: '',
        kgPrice: 0,
        specifications: '',
    });

    useEffect(() => {
        if (pepperUuid) {
            const fetchPepper = async () => {
                const fetchedPepper = await getPepper(pepperUuid);
                setPepper(fetchedPepper);
            };
            fetchPepper();

            if (pepper) {
                setPepper({
                    uuid: pepper.uuid,
                    name: pepper.name,
                    type: pepper.type,
                    origin: pepper.origin,
                    desc: pepper.desc,
                    specifications: pepper.specifications,
                    kgPrice: pepper.kgPrice,
                });
            }
        }
    }, [pepperUuid]);

    const [editMode, setEditMode] = useState<boolean>(false);

    const handleFinishEdit = async () => {
        await updatePepper(pepper);
        setEditMode(false);
    }

    return !pepperUuid ? <div>No pepper UUID provided</div> : (
        <>
            <div className="flex flex-col items-center mx-5 my-6">
                <div className="flex items-center">
                    {/* On crée une div similaire invisible pour équilibrer et bien centrer le titre */}
                    {editMode ? (<></>) : (
                        <div className="flex-1 invisible">
                            <EditSVG />
                        </div>
                    )}
                    <EditStringField className="text-5xl font-bold text-center mx-3"
                                     pepper={pepper}
                                     field={"name"}
                                     setPepper={setPepper}
                                     editable={editMode}
                    />
                    {editMode ? (<></>) : (
                        <div className="flex-1 flex justify-end">
                            <EditSVG onClick={() => {setEditMode(true)}} />
                        </div>
                    )}
                </div>
                <EditStringField className="text-2xl mt-3"
                                 pepper={pepper}
                                 field={"type"}
                                 setPepper={setPepper}
                                 editable={editMode}
                />
                <EditStringField className="mt-1"
                                 pepper={pepper}
                                 field={"origin"}
                                 setPepper={setPepper}
                                 editable={editMode}
                />
                <EditStringField className="text-2xl mt-3"
                                 pepper={pepper}
                                 field={"desc"}
                                 setPepper={setPepper}
                                 editable={editMode}
                />
                <EditSpecificationsLine className="mt-1"
                                 pepper={pepper}
                                 setPepper={setPepper}
                                 editable={editMode}
                />
                <div className={`flex flex-row justify-center items-center`}>
                    <EditStringField className="mt-1 mx-1"
                                     pepper={pepper}
                                     field={"kgPrice"}
                                     setPepper={setPepper}
                                     editable={editMode}
                    /> €/kg
                </div>
                {editMode ? (
                    <Button onClick={handleFinishEdit}
                            className={`my-5`}
                    >
                        Terminer
                    </Button>
                ) : <></>}
            </div>
        </>
    )
}

export default PepperPage;
