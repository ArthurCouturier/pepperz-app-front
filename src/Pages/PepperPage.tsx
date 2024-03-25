import {Params, useParams} from "react-router-dom";

function PepperPage() {

    const {pepperUuid}: Readonly<Params<string>> = useParams();

    return (
        <>
            {pepperUuid}
        </>
    )
}

export default PepperPage;
