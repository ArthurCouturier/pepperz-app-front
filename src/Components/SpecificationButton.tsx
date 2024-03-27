import Button from "./Button";
import PepperSpecificationsEnum, {getSpecificationValue} from "../utils/PepperSpecificationsEnum.ts";

interface SpecificationButtonProps {
    specValue: keyof typeof PepperSpecificationsEnum | string;
    className?: string;
}

export default function SpecificationButton({ specValue, className }: SpecificationButtonProps) {

    return (
        <Button className={`${className}`}>
            {getSpecificationValue(specValue)}
        </Button>
    );
}
