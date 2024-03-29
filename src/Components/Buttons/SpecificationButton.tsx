import Button from "./Button.tsx";
import PepperSpecificationsEnum, {getSpecificationValue} from "../../utils/PepperSpecificationsEnum.ts";

interface SpecificationButtonProps {
    specValue: keyof typeof PepperSpecificationsEnum | string,
    onClick?: () => void,
    editMode?: boolean,
    className?: string
}

interface SpecButtonProps {
    spec: string,
    onClick?: () => void,
    className?: string
}

function SpecButton({ spec, onClick, className }: SpecButtonProps) {
    return (
        <Button className={`${className}`} title={`Voir tous les poivres ${spec}`} onClick={onClick}>
            {spec}
        </Button>
    )
}

export default function SpecificationButton({ specValue, onClick, editMode, className }: SpecificationButtonProps) {

    const spec: string = getSpecificationValue(specValue);

    return editMode ? (
        <SpecButton spec={spec} onClick={onClick} className={className} />
        ) : (
        <a href={`/specification/${spec}`}>
            <SpecButton spec={spec} onClick={onClick} className={className} />
        </a>
    );
}
