import Button from "./Button.tsx";
import React from "react";
import Pepper from "../interfaces/PepperInterface.ts";

interface PepperCardProps {
    children?: React.ReactNode;
    pepperJson: Pepper;
    className?: string;
    clickPepperHandler: (name: string) => Promise<void>;
}

function PepperCard({ children, pepperJson, className, clickPepperHandler }: PepperCardProps) {

    const pepperUuid: string = pepperJson.uuid;
    const pepperName: string = pepperJson.name;
    const pepperOrigin: string = pepperJson.origin;
    const pepperDesc: string = pepperJson.desc;
    const pepperKgPrice: number = pepperJson.kgPrice;
    const pepperSpecifications: string = pepperJson.specifications;

    const handler = async () => {
        await clickPepperHandler(pepperUuid);
    }

    return (
        <>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col max-w-48 ${className}`} onClick={handler}>
                <div className={"flex font-bold justify-center items-center"}>
                    {pepperName}
                </div>
                <div className={"flex text-sm justify-center items-center"}>
                    <div className={"italic mx-1"}>
                        {pepperOrigin}
                    </div>
                    <div className={"italic text-xs mx-1"}>
                        {pepperKgPrice}€/kg
                    </div>
                </div>
                <div className={"text-xs"}>
                    {pepperDesc}
                </div>
                <div className={"text-xs"}>
                    Spec: {pepperSpecifications}
                </div>
                <div>
                    {children}
                </div>
            </Button>
        </>
    )
}

export default PepperCard;
