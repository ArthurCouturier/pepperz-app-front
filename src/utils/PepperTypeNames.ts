enum PepperTypeNames {
    BLACK="Noir",
    WHITE="Blanc",
    RED="Rouge",
    GREEN="Vert",
    // MIX="Mixe"
}

export function getPepperTypeName(type: string): string {
    const typeName = PepperTypeNames[type as keyof typeof PepperTypeNames];
    return typeName || '';
}

export default PepperTypeNames;