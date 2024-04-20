import PepperTypeNames from "../utils/PepperTypeNames.ts";
import PepperTypeCard from "../Components/Cards/PepperTypeCard.tsx";
import PepperTypeColors from "../utils/PepperTypeColors.ts";

function Home() {
    const pepperTypes = Object.keys(PepperTypeNames) as (keyof typeof PepperTypeNames)[];

    return (
        <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full p-4">
                {pepperTypes.map((type, index) => (
                    <div key={index} className="flex items-center justify-center"> {/* Encapsule chaque carte dans un flex container */}
                        <PepperTypeCard type={type}
                            className={`${PepperTypeColors[type]} font-bold text-black text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
