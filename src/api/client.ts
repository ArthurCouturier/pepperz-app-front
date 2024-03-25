import axios from "axios";
import Pepper from "../interfaces/PepperInterface.ts";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;

export async function getAllPeppers() {
    const response = await axios.get(backendUrl + '/api/peppers/getAll');
    return response.data;
}

export async function deletePepper(uuid: string) {
    const response = await axios.delete(backendUrl + '/api/peppers/deleteByUUid/' + uuid);
    return response.data;
}

export async function fetchPeppers(setPeppers: (pepperData: Pepper[]) => void) {
    const peppersData: Pepper[] = await getAllPeppers();
    setPeppers(peppersData);
}

export async function deletePepperHandler(uuid: string, setPeppers: (pepperData: Pepper[]) => void) {
    await deletePepper(uuid);
    await fetchPeppers(setPeppers);
}
