import PepperTypeNames from "../utils/PepperTypeNames.ts";
import PepperTypeCard from "../Components/Cards/PepperTypeCard.tsx";

function Home() {

    const pepperTypes = Object.keys(PepperTypeNames) as (keyof typeof PepperTypeNames)[]

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {pepperTypes.map((type, index) => (
                        <PepperTypeCard key={index} type={type}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Home;
