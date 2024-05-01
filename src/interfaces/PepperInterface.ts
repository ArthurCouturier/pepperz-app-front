import PepperTypeNames from "../utils/PepperTypeNames.ts";

export default interface Pepper {
    uuid: string;
    name: string;
    type: PepperTypeNames;
    origin: string;
    desc: string;
    kgPrice: number;
    specifications: string;
    globalRate: number;
}