import Button from "../Buttons/Button.tsx";
import React, { useState } from "react";
import Pepper from "../../interfaces/PepperInterface.ts";
import EditSVG from "../SVGs/EditSVG.tsx";
import SpecificationLine from "../Lines/SpecificationLine.tsx";
import StarRating from "../Forms/StarRating.tsx";

interface PepperCardProps {
    children?: React.ReactNode;
    pepperJson: Pepper;
    className?: string;
    deletePepperHandler?: (name: string) => Promise<void>;
}

function PepperCard({ children, pepperJson, className, deletePepperHandler }: PepperCardProps) {

    const pepperUuid: string = pepperJson.uuid;
    const pepperName: string = pepperJson.name;
    const pepperOrigin: string = pepperJson.origin;
    const pepperDesc: string = pepperJson.desc;
    const pepperKgPrice: number = pepperJson.kgPrice;
    const pepperSpecifications: string = pepperJson.specifications;
    const pepperGlobalRate: number = pepperJson.globalRate;

    const [isHovered, setIsHovered] = useState(false);
    const [seeDetails, setSeeDetails] = useState<boolean>(false);

    const seeDetailsHandler = () => {
        setSeeDetails(!seeDetails);
    }

    const deleteHandler = async () => {
        if (deletePepperHandler) {
            await deletePepperHandler(pepperUuid);
        }
    }

    return (
        <>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col transform transition-all duration-300 overflow-hidden
            ${className}
            ${isHovered ? '' : 'h-22'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setSeeDetails(false);
                }}
                onClick={seeDetailsHandler}
                key={pepperUuid}
            >

                <div className={"flex flex-row justify-center items-center relative w-full"}>
                    {seeDetails && (
                        <div className={`flex font-semibold items-center mr-3 ml-3`}>
                            <EditSVG className={`opacity-0`} />
                        </div>
                    )}
                    <div
                        className={`flex-grow font-bold justify-center items-center transform transition-all duration-300 break-all ${isHovered ? 'scale-150' : 'scale-100'} flex justify-center`}
                    >
                        {pepperName}
                    </div>
                    {seeDetails && (
                        <div className={`flex font-semibold items-center mr-3 ml-3`}>
                            <EditSVG href={`/pepper/${pepperUuid}`} />
                        </div>
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

                <div className="flex justify-center items-center w-full">
                    <StarRating rateValue={pepperGlobalRate} />
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
                            {pepperSpecifications ? (
                                <SpecificationLine specifications={pepperSpecifications} key={pepperSpecifications} />
                            ) : (<>
                                No specifications defined
                            </>)}
                        </div>
                        {deletePepperHandler ?
                            <Button className={`bg-red-500 text-xs w-32 flex justify-center items-center my-1`}
                                onClick={() => deleteHandler()}
                                key={pepperUuid + "_delete"}
                            >
                                Delete Pepper
                            </Button> : (<></>)
                        }

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
