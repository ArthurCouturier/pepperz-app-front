import Button from "./Button.tsx";
import React, {useState} from "react";
import Pepper from "../interfaces/PepperInterface.ts";
import EditSVG from "./SVGs/EditSVG.tsx";

interface PepperCardProps {
    children?: React.ReactNode;
    pepperJson: Pepper;
    className?: string;
    deletePepperHandler: (name: string) => Promise<void>;
}

function PepperCard({ children, pepperJson, className, deletePepperHandler }: PepperCardProps) {

    const pepperUuid: string = pepperJson.uuid;
    const pepperName: string = pepperJson.name;
    const pepperOrigin: string = pepperJson.origin;
    const pepperDesc: string = pepperJson.desc;
    const pepperKgPrice: number = pepperJson.kgPrice;
    const pepperSpecifications: string = pepperJson.specifications;

    const [isHovered, setIsHovered] = useState(false);
    const [seeDetails, setSeeDetails] = useState<boolean>(false);

    const seeDetailsHandler = () => {
        setSeeDetails(!seeDetails);
    }

    const deleteHandler = async () => {
        await deletePepperHandler(pepperUuid);
    }

    return (
        <>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col transform transition-all duration-300 
            ${className} 
            ${isHovered ? 'w-72' : 'w-36 h-16'}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => {
                        setIsHovered(false);
                        setSeeDetails(false);
                    }}
                    onClick={seeDetailsHandler}
            >

                <div className={"flex flex-row justify-center items-center relative"}>
                    <div
                        className={`flex font-bold justify-center items-center transform transition duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}>
                        {pepperName}
                    </div>
                    {seeDetails && (
                        <EditSVG className={`font-semibold absolute right-0 mr-3`}/>
                    )}
                </div>

                <div className={"flex text-sm justify-center items-center"}>
                    <div className={"italic mx-1"}>
                        {pepperOrigin}
                    </div>
                    <div className={"italic text-xs mx-1"}>
                        {pepperKgPrice}€/kg
                    </div>
                </div>

                {isHovered ?
                    <>
                        <div className={"text-xs"}>
                            {pepperDesc}
                        </div>
                    </>
                    :
                    <></>
                }

                {seeDetails ?
                    <div className={`flex justify-center items-center flex-col`}>
                        <div className={"flex text-xs"}>
                            Spec: {pepperSpecifications}
                        </div>
                        <Button className={`bg-red-500 text-xs w-32 flex justify-center items-center my-1`}
                                onClick={() => deleteHandler()}
                        >
                            Delete Pepper
                        </Button>
                    </div>
                    :
                    <></>
                }

                <div>
                    {children}
                </div>

            </Button>
        </>
    )
}

export default PepperCard;
