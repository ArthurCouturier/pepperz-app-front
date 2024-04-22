import Pepper from "../../interfaces/PepperInterface.ts";

interface EditFieldProps {
    pepper: Pepper,
    field: keyof Pepper,
    setPepper: React.Dispatch<React.SetStateAction<Pepper>>,
    className?: string,
    editable?: boolean
}

function EditStringField({ pepper, field, setPepper, className, editable }: EditFieldProps) {
    return editable ? (
        <input
            className={`w-full ${className}`}
            value={pepper[field]}
            onChange={(e) => setPepper({ ...pepper, [field]: e.target.value })}
            key={field}
        />
    ) : (
        <div className={className} key={field}>
            {pepper[field]}
        </div>
    );
}

export default EditStringField;
