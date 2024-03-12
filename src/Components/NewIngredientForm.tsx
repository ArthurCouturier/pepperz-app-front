import Button from "./Button.tsx";
import {useState} from "react";
import axios from "axios";
import IngredientTypeNames from "../utils/IngredientTypeNames.ts";

function NewIngredientForm({fetchIngredients, type} :
                               {fetchIngredients: () => void,
                               type: string}
                           ) {

    const [nameInput, setNameInput] = useState("");
    const [originInput, setOriginInput] = useState("");
    const [kgPriceInput, setKgPriceInput] = useState("");
    const [descInput, setDescInput] = useState("");

    async function createIngredient(name: string, origin: string, kgPrice: string, desc: string) {
        const data = {"name": name, "origin": origin, "kgPrice": kgPrice, "desc": desc, "type": type};
        const response = await axios.post('http://127.0.0.1:8080/api/peppers/create', data);
        return response.data;
    }

    const clickAddIngredientHandler = async () => {
        if (nameInput != "" && descInput != "") {
            await createIngredient(nameInput, originInput, kgPriceInput, descInput);
            fetchIngredients();
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
            <Button onClick={clickAddIngredientHandler} className={"text-xs p-0.5"}>
                Ajouter un poivre {IngredientTypeNames[type]}
            </Button>
        </div>
    )
}

export default NewIngredientForm;
