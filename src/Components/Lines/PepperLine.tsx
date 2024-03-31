import PepperCard from "../Cards/PepperCard.tsx";
import NewPepperForm from "../Forms/NewPepperForm.tsx";
import {getPepperTypeName} from "../../utils/PepperTypeNames.ts";
import {getPepperTypeColor} from "../../utils/PepperTypeColors.ts";
import Pepper from "../../interfaces/PepperInterface.ts";

function PepperLine({children, peppers, className, deletePepperHandler, fetchPeppers, type}:
                        {
                            children?: React.ReactNode,
                            peppers: Pepper[],
                            className?: string,
                            deletePepperHandler: (name: string) => Promise<void>,
                            fetchPeppers: () => void,
                            type: string
                        }) {

    return (
        <>
            <div className={`relative flex items-center justify-center border-2 rounded-2xl my-4 ` + className}>
                <div
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${getPepperTypeColor(type)} text-black font-extrabold text-xl px-4 rounded-full`}>
                    {getPepperTypeName(type)}
                </div>
                <div className={"flex items-center justify-center mt-3 mb-1"}>
                    <div className={"flex justify-center items-center"}>
                        {peppers.map(pepper => (
                            <PepperCard
                                pepperJson={pepper}
                                deletePepperHandler={deletePepperHandler}
                            />
                        ))}
                    </div>
                    <div className={"flex flex-col"}>
                        {children}
                    </div>
                    <NewPepperForm
                        fetchPeppers={fetchPeppers}
                        type={type}
                    />
                </div>
            </div>
        </>
    )
}

export default PepperLine;
