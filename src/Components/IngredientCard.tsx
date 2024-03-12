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
    const ingredientOrigin: string = ingredientJson.origin;
    const ingredientDesc: string = ingredientJson.desc;
    const ingredientKgPrice: number = ingredientJson.kgPrice;
    const ingredientSpecifications: string = ingredientJson.specifications;

    const handler = async () => {
        await clickIngredientHandler(ingredientUuid);
    }

    return (
        <>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col max-w-48 ${className}`} onClick={handler}>
                <div className={"flex font-bold justify-center items-center"}>
                    {ingredientName}
                </div>
                <div className={"flex text-sm justify-center items-center"}>
                    <div className={"italic mx-1"}>
                        {ingredientOrigin}
                    </div>
                    <div className={"italic text-xs mx-1"}>
                        {ingredientKgPrice}€/kg
                    </div>
                </div>
                <div className={"text-xs"}>
                    {ingredientDesc}
                </div>
                <div className={"text-xs"}>
                    Spec: {ingredientSpecifications}
                </div>
                <div>
                    {children}
                </div>
            </Button>
        </>
    )
}

export default IngredientCard;
