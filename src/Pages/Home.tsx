import IngredientCard from "../Components/IngredientCard.tsx";
import Button from "../Components/Button.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

async function getAllIngredients() {
    const response = await axios.get('http://127.0.0.1:8080/api/ingredients/getAll');
    return response.data;
}

async function createIngredient(name: string, desc: string) {
    const data = {"name": name, "desc": desc};
    const response = await axios.post('http://127.0.0.1:8080/api/ingredients/create', data);
    return response.data;
}

async function deleteIngredient(uuid: string) {
    const response = await axios.delete('http://127.0.0.1:8080/api/ingredients/deleteByUUid/' + uuid);
    return response.data;
}

function Home() {

    const [ingredients, setIngredients] = useState([]);
    const [nameInput, setNameInput] = useState("");
    const [descInput, setDescInput] = useState("");

    const fetchIngredients = async () => {
        const ingredientsData = await getAllIngredients();
        setIngredients(ingredientsData);
    };

    useEffect(() => {
        fetchIngredients();
    }, []);

    const clickAddIngredientHandler = async () => {
        if (nameInput != "" && descInput != "") {
            await createIngredient(nameInput, descInput);
            fetchIngredients();
            setNameInput("");
            setDescInput("");
        }
    }

    const clickIngredientHandler = async (uuid: string) => {
        await deleteIngredient(uuid);
        fetchIngredients();
    }

    return (
        <>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"flex"}>
                    Home Page
                </div>
                <div className={"flex items-center justify-center"}>
                    {ingredients.map(ingredient => (
                        <IngredientCard ingredientJson={ingredient} clickIngredientHandler={clickIngredientHandler} />
                    ))}
                </div>
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)}
                        className={"my-2"}/>
                <input value={descInput} onChange={(e) => setDescInput(e.target.value)}
                       className={"my-2"}/>
                <Button onClick={clickAddIngredientHandler}>
                    Ajouter un ingrédient
                </Button>
            </div>
        </>
    )
}

export default Home;
