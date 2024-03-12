import Button from "./Button.tsx";
import React from "react";

function IngredientCard({children, ingredientJson, className, clickIngredientHandler}:
                            {
                                children?: React.ReactNode,
                                ingredientJson: object,
                                className?: string,
                                clickIngredientHandler: (name: string) => Promise<void>
                            }) {

    const ingredientUuid: string = ingredientJson.uuid;
    const ingredientName: string = ingredientJson.name;
    const ingredientDesc: string = ingredientJson.desc;

    const handler = async () => {
        await clickIngredientHandler(ingredientUuid);
    }

    return (
        <>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col ${className}`} onClick={handler}>
                <div className={"font-bold"}>
                    {ingredientName}
                </div>
                <div className={"text-xs"}>
                    {ingredientDesc}
                </div>
                <div>
                    {children}
                </div>
            </Button>
        </>
    )
}

export default IngredientCard;
