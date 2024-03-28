import Button from "./Button.tsx";
import PepperSpecificationsEnum, {getSpecificationValue} from "../../utils/PepperSpecificationsEnum.ts";

interface SpecificationButtonProps {
    specValue: keyof typeof PepperSpecificationsEnum | string,
    onClick?: () => void,
    className?: string
}

export default function SpecificationButton({ specValue, onClick, className }: SpecificationButtonProps) {

    const spec: string = getSpecificationValue(specValue);

    return (
        <a href={`/specification/${spec}`}>
            <Button className={`${className}`} title={`Voir tous les poivres ${spec}`} onClick={onClick}>
                {spec}
            </Button>
        </a>
    );
}
