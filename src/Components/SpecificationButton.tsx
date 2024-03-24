import Button from "./Button.tsx";

interface SpecificationButtonProps {
    children?: React.ReactNode,
    className?: string;
}

function SpecificationButton({ children, className }: SpecificationButtonProps) {
    return (
        <Button className={`${className}`}>
            {children}
        </Button>
    )
}

export default SpecificationButton;