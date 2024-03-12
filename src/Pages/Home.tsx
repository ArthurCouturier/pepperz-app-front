import axios from "axios";
import {useEffect, useState} from "react";
import IngredientLine from "../Components/IngredientLine.tsx";
import IngredientTypeNames from "../utils/IngredientTypeNames.ts";

async function getAllIngredients() {
    const response = await axios.get('http://127.0.0.1:8080/api/ingredients/getAll');
    return response.data;
}

async function deleteIngredient(uuid: string) {
    const response = await axios.delete('http://127.0.0.1:8080/api/ingredients/deleteByUUid/' + uuid);
    return response.data;
}

function Home() {

    const [ingredients, setIngredients] = useState([]);

    const fetchIngredients = async () => {
        const ingredientsData = await getAllIngredients();
        setIngredients(ingredientsData);
    };

    useEffect(() => {
        fetchIngredients();
    }, []);

    const clickIngredientHandler = async (uuid: string) => {
        await deleteIngredient(uuid);
        fetchIngredients();
    }

    const ingredientTypes = Object.keys(IngredientTypeNames).filter((v) => isNaN(Number(v)))

    return (
        <>
            <div className={"flex items-center justify-center flex-col"}>
                <div className={"flex flex-col items-center justify-center"}>
                    {ingredientTypes.map(type => {
                        return <IngredientLine
                            ingredients={ingredients.filter(ingredient => ingredient.type === type)}
                            clickIngredientHandler={clickIngredientHandler}
                            fetchIngredients={fetchIngredients}
                            type={type}
                        />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;
