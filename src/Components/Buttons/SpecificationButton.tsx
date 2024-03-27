import Button from "./Button.tsx";
import PepperSpecificationsEnum, {getSpecificationValue} from "../../utils/PepperSpecificationsEnum.ts";

interface SpecificationButtonProps {
    specValue: keyof typeof PepperSpecificationsEnum | string;
    className?: string;
}

export default function SpecificationButton({ specValue, className }: SpecificationButtonProps) {

    const spec: string = getSpecificationValue(specValue);

    return (
        <Button className={`${className}`} title={`Voir tous les poivres ${spec}`}>
            {spec}
        </Button>
    );
}
