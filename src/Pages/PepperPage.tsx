import { Params, useParams } from "react-router-dom";
import Pepper from "../interfaces/PepperInterface.ts";
import { deletePepperWithoutAccessToken, getPepper, updatePepper } from "../api/client.ts";
import { useEffect, useState } from "react";
import EditSVG from "../Components/SVGs/EditSVG.tsx";
import Button from "../Components/Buttons/Button.tsx";
import EditStringField from "../Components/EditFields/EditStringField.tsx";
import PepperTypeNames from "../utils/PepperTypeNames.ts";
import EditSpecificationsLine from "../Components/Lines/EditSpecificationsLine.tsx";
import { useAuth } from "../Components/Auth/AuthContext.tsx";
import StarRating from "../Components/Forms/StarRating.tsx";

function PepperPage() {

    const { pepperUuid }: Readonly<Params<string>> = useParams<{ pepperUuid: string }>();
    const [errorText, setErrorText] = useState<string>('');
    const [pepper, setPepper] = useState<Pepper>({
        uuid: '',
        name: '',
        type: PepperTypeNames.BLACK,
        origin: '',
        desc: '',
        kgPrice: 0,
        specifications: '',
    });

    const profile = useAuth().profile;

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
        await updatePepper(pepper)
            .then(() => {
                setEditMode(false);
                setErrorText('');
            })
            .catch(() => {
                if (!pepper.specifications) {
                    setErrorText("Le poivre doit avoir au moins une spécification.");
                } else {
                    setErrorText("Erreur lors de la mise à jour du poivre. Veuillez réessayer.");
                }
            });
    }

    return !pepperUuid ? <div>No pepper UUID provided</div> : (
        <>
            <div className="flex flex-col items-center mx-5 my-6">
                <div className="flex items-center break-all w-full">
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
                            <EditSVG onClick={() => { setEditMode(true) }} />
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
                <EditStringField className="text-2xl mt-3 break-all"
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
                {editMode && (
                    <Button onClick={handleFinishEdit}
                        className={`my-5`}
                    >
                        Terminer
                    </Button>
                )}
                {editMode && profile && profile.shouldBeAdmin && (
                    <Button onClick={() => { deletePepperWithoutAccessToken(pepper.uuid) }}
                        className={`my-5 bg-red-700`}
                    >
                        Supprimer
                    </Button>
                )}

                {errorText && <div className="text-red-500">{errorText}</div>}

                {!editMode &&
                    <StarRating />
                }
            </div>
        </>
    )
}

export default PepperPage;
