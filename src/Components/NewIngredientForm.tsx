import Button from "./Button.tsx";
import {useState} from "react";
import axios from "axios";

function NewIngredientForm({fetchIngredients, type} :
                               {fetchIngredients: () => void,
                               type: string}
                           ) {

    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");

    async function createIngredient(name: string, desc: string) {
        const data = {"name": name, "desc": desc, "type": type};
        const response = await axios.post('http://127.0.0.1:8080/api/ingredients/create', data);
        return response.data;
    }

    const clickAddIngredientHandler = async () => {
        if (nameInput != "" && descInput != "") {
            await createIngredient(nameInput, descInput);
            fetchIngredients();
            setNameInput("");
            setDescInput("");
        }
    }

    return (
        <div className={"flex flex-col mr-3 my-2"}>
            <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
                   className={"my-1 flex"}/>
            <input value={descInput} onChange={(e) => setDescInput(e.target.value)}
                   className={"my-1 flex"}/>
            <Button onClick={clickAddIngredientHandler} className={"text-xs p-0.5"}>
                Ajouter un {type}
            </Button>
        </div>
    )
}

export default NewIngredientForm;
