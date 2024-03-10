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
            <div className={`relative flex items-center justify-center border-2 rounded-2xl my-4 ` + className}>
                <div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 font-bold px-4 rounded-full">
                    {type}
                </div>
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
