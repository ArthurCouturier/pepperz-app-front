import { TokenClientConfig } from "@react-oauth/google";

export interface UserProfile {
    name: string;
    email: string;
    picture: string;
}

export interface AuthContextType {
    user: TokenClientConfig; // Remplacez par un type plus spécifique si disponible
    profile: UserProfile | null;
    login: () => void;
    logOut: () => void;
}
