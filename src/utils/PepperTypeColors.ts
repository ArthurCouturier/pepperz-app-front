enum PepperTypeColors {
    BLACK="bg-gray-700",
    WHITE="bg-white",
    RED="bg-red-400",
    GREEN="bg-green-300",
    MIX="bg-purple-500"
}

export function getPepperTypeColor(type: string): string {
    const typeName = PepperTypeColors[type as keyof typeof PepperTypeColors];
    return typeName || '';
}

export default PepperTypeColors;