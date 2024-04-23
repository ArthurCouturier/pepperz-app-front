import Pepper from "../../interfaces/PepperInterface";
import Button from "../Buttons/Button";

interface ValidatePepperCardProps {
    pepper: Pepper;
}

function ValidatePepperCard({ pepper }: ValidatePepperCardProps) {

    return (
        <div key={pepper.uuid}>
            <div
                className="font-serif border-2 border-black p-4 m-4 text-left flex flex-row"
            >
                <div className="flex-1 flex-grow bg-red-500">
                    <h2>Name:</h2>
                    <h2>Uuid:</h2>
                    <h2>Origin:</h2>
                    <h2>Desc:</h2>
                    <h2>Price/Kg:</h2>
                    <h2>Specs:</h2>
                </div>
                <div className="flex-3 flex-grow bg-green-500">
                    <h2>{pepper.name}</h2>
                    <p>{pepper.uuid}</p>
                    <p>{pepper.origin}</p>
                    <p>{pepper.desc}</p>
                    <p>{pepper.kgPrice}</p>
                    <p>{pepper.specifications}</p>
                </div>
            </div>
            <div>
                <Button
                    className="hover:bg-green-700"
                >
                    Valider
                </Button>
                <Button
                    className="hover:bg-red-700"
                >
                    Rejeter
                </Button>
            </div>
        </div>
    )
}

export default ValidatePepperCard;
