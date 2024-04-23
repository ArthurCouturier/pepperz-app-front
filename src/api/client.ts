import axios from "axios";
import Pepper from "../interfaces/PepperInterface.ts";
import PepperSpecificationsEnum from "../utils/PepperSpecificationsEnum.ts";
import PepperSpecifications from "../utils/PepperSpecificationsEnum.ts";

const backendUrl: string = import.meta.env.VITE_BACKEND_URL;

export async function getAllPeppers() {
    const response = await axios.get(backendUrl + '/api/peppers/getAllValidated');
    return response.data;
}

export async function deletePepper(uuid: string) {
    const response = await axios.delete(backendUrl + '/api/peppers/deleteByUUid/' + uuid);
    return response.data;
}

export async function fetchPeppers(setPeppers: (pepperData: Pepper[]) => void) {
    const peppersData: Pepper[] = await getAllPeppers();
    setPeppers(peppersData);
    return peppersData;
}

export async function getPepper(uuid: string): Promise<Pepper> {
    const response = await axios.get(backendUrl + `/api/peppers/getByUuid/${uuid}`);
    return response.data;
}

export async function getPeppers(specification: string): Promise<Pepper[]> {
    const response = await axios.get(backendUrl + `/api/peppers/getBySpecification/${specification}`);
    return response.data;
}

function getKeyByValue(value: string): string {
    return Object.keys(PepperSpecifications).find(
        key => PepperSpecifications[key as keyof typeof PepperSpecifications] === value
    ) as string;
}

export const fetchPeppersWithSpecification = async (specification: string | undefined, setPeppers: React.Dispatch<React.SetStateAction<Pepper[]>>) => {
    if (specification) {
        try {
            const fetchedPeppers = await getPeppers(getKeyByValue(specification));
            setPeppers(fetchedPeppers);
        } catch (error) {
            console.error("Failed to fetch peppers:", error);
        }
    }
};

export const fetchUnvalidatedPeppers = async (setPeppers: (pepperData: Pepper[]) => void, accessToken: string) => {
    const response = await axios.get(backendUrl + '/api/peppers/getAllUnvalidated', {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    });
    setPeppers(response.data);
    return response.data;
}

export async function deletePepperHandler(uuid: string, setPeppers: (pepperData: Pepper[]) => void) {
    await deletePepper(uuid);
    await fetchPeppers(setPeppers);
}

function checkSpecifications(pepper: Pepper): boolean {
    if (pepper.specifications.length === 0) {
        return true;
    }
    const specs: string[] = pepper.specifications.split(";");
    for (const spec of specs) {
        if (!Object.keys(PepperSpecificationsEnum).includes(spec)) {
            console.error(`Invalid specification: ${spec}`);
            return false;
        }
    }
    return true;
}

export async function updatePepper(pepper: Pepper) {
    if (!checkSpecifications(pepper)) {
        console.error(`Invalid specification while updating for pepper: ${pepper}`);
        return false;
    }
    const response = await axios.put(backendUrl + '/api/peppers/update/' + pepper.uuid, pepper);
    return response.data;
}

export function getAccessToken() {
    const user: string = localStorage.getItem("user") || "";
    return JSON.parse(user).access_token;
}

export async function sendToken(token: string) {
    const response = await axios.get(
        backendUrl + '/api/users/auth/google',
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            }
        }
    );
    return response.data;
}

export async function validatePepper(uuid: string, accessToken: string) {
    const response = await axios.get(
        backendUrl + '/api/peppers/validate-pepper/' + uuid,
        {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

    return response.data;
}