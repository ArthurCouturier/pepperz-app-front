import Button from "./Button.tsx";
import {useState} from "react";
import axios from "axios";
import {getPepperTypeName} from "../utils/PepperTypeNames.ts";

function NewPepperForm({fetchPeppers, type}:
                           {
                               fetchPeppers: () => void,
                               type: string
                           }
) {

    const [nameInput, setNameInput] = useState("");
    const [originInput, setOriginInput] = useState("");
    const [kgPriceInput, setKgPriceInput] = useState("");
    const [descInput, setDescInput] = useState("");

    async function createPepper(name: string, origin: string, kgPrice: string, desc: string) {
        const data = {"name": name, "origin": origin, "kgPrice": kgPrice, "desc": desc, "type": type};
        const response = await axios.post('https://pepperz-back.vercel.app/api/peppers/create', data);
        return response.data;
    }

    const clickAddPepperHandler = async () => {
        if (nameInput != "" && descInput != "") {
            await createPepper(nameInput, originInput, kgPriceInput, descInput);
            fetchPeppers();
            setNameInput("");
            setOriginInput("");
            setKgPriceInput("")
            setDescInput("");
        }
    }

    return (
        <div className={"flex flex-col mx-3 my-2"}>
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
                   placeholder={"Nom"}
                   className={"my-1 flex"}/>
            <input value={originInput} onChange={(e) => setOriginInput(e.target.value)}
                   placeholder={"Origine"}
                   className={"my-1 flex"}/>
            <input value={kgPriceInput} onChange={(e) => setKgPriceInput(e.target.value)}
                   placeholder={"Prix au Kg"}
                   className={"my-1 flex"}/>
            <input value={descInput} onChange={(e) => setDescInput(e.target.value)}
                   placeholder={"desc"}
                   className={"my-1 flex"}/>
            <Button onClick={clickAddPepperHandler} className={"text-xs p-0.5"}>
                Ajouter un poivre {getPepperTypeName(type)}
            </Button>
        </div>
    )
}

export default NewPepperForm;
