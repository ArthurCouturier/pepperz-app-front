import IngredientCard from "./IngredientCard.tsx";
import NewIngredientForm from "./NewIngredientForm.tsx";

function IngredientLine({children, ingredients, className, clickIngredientHandler, fetchIngredients, type}:
                            {
                                children?: React.ReactNode,
                                ingredients: object[],
                                className?: string,
                                clickIngredientHandler: (name: string) => Promise<void>,
                                fetchIngredients: () => void,
                                type: string
                            }) {

    return (
        <>
            <div className={`flex items-center justify-center ` + className}>
                <div className={"flex"}>
                    {ingredients.map(ingredient => (
                        <IngredientCard
                            ingredientJson={ingredient}
                            clickIngredientHandler={clickIngredientHandler}
                        />
                    ))}
                </div>
                <div className={"flex flex-col"}>
                    {children}
                </div>
                <NewIngredientForm
                    fetchIngredients={fetchIngredients}
                    type={type}
                />
            </div>
        </>
    )
}

export default IngredientLine;
