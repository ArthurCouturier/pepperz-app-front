import Pepper from "../interfaces/PepperInterface.ts";

interface EditFieldProps {
    pepper: Pepper,
    field: keyof Pepper,
    setPepper: React.Dispatch<React.SetStateAction<Pepper>>,
    className?: string,
    editable?: boolean
}

function EditField({ pepper, field, setPepper, className, editable }: EditFieldProps) {
    return editable ? (
        <input
            className={className}
            value={pepper[field]}
            onChange={(e) => setPepper({ ...pepper, [field]: e.target.value })}
        />
    ) : (
        <div className={className}>
            {pepper[field]}
        </div>
    );
}

export default EditField;
