import PepperSpecificationsEnum from "../../utils/PepperSpecificationsEnum";
import SpecificationButton from "../Buttons/SpecificationButton.tsx";
import SpecificationLine from "./SpecificationLine.tsx";
import Pepper from "../../interfaces/PepperInterface.ts";

interface EditSpecificationLineProps {
    pepper: Pepper;
    setPepper: React.Dispatch<React.SetStateAction<Pepper>>;
    editable?: boolean;
    className?: string;
}

function EditSpecificationLine({pepper, setPepper, editable, className}: EditSpecificationLineProps) {

    const allSpecs: string[] = Object.keys(PepperSpecificationsEnum)

    const pepperSpecsArray: string[] = pepper.specifications ? pepper.specifications.split(';').map(spec => spec.trim()) : [];

    const toggleSpecification = (specKey: keyof typeof PepperSpecificationsEnum) => {
        const newSpecsArray = pepperSpecsArray.includes(specKey)
            ? pepperSpecsArray.filter(spec => spec !== specKey)
            : [...pepperSpecsArray, specKey];
        const newSpecsString = newSpecsArray.join(';');
        setPepper({ ...pepper, ["specifications"]: newSpecsString });
    };

    return editable ? (
        <div className={className}>
            {allSpecs.map((specKey: string) => (
                <SpecificationButton
                    specValue={specKey as keyof typeof PepperSpecificationsEnum}
                    onClick={() => toggleSpecification(specKey as keyof typeof PepperSpecificationsEnum)}
                    className={`m-1 font-bold ${pepperSpecsArray.includes(specKey) ? 'bg-green-500 text-gray-800' : ''}`}
                    editMode={true}
                />
            ))}
        </div>
    ) : pepper.specifications ? (
        <SpecificationLine specifications={pepper.specifications} />
    ) : (
        <>Ce poivre n'a aucune spécification définie</>
    );
}

export default EditSpecificationLine;
