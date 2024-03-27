enum PepperSpecifications {
    FRUITED="Fruité",
    STRONG="Fort",
    SWEET="Doux",
    SPICY="Epicé",
    MILD="Bénin"
}

export function getSpecificationValue(key: string): string {
    const enumValue = (PepperSpecifications as never)[key];
    return enumValue || key;
}

export default PepperSpecifications;
