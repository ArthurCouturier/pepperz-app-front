import SpecificationButton from "../Buttons/SpecificationButton.tsx";

interface SpecificationLineProps {
    className?: string;
    specifications: string;
}

function SpecificationLine({className, specifications}: SpecificationLineProps) {

    return (
        <div className={className}>
            {specifications.split(";").map((spec: string) => (
                <SpecificationButton specValue={spec.trim()}/>
            ))}
        </div>
    )
}

export default SpecificationLine;
