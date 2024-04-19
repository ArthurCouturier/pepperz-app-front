import { googleLogout, TokenClientConfig, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextType, UserProfile } from '../../models/AuthModels';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<unknown>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            setUser(tokenResponse);
            const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokenResponse.access_token}`, {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`,
                    Accept: 'application/json'
                }
            });
            setProfile({
                name: response.data.name,
                email: response.data.email,
                picture: response.data.picture
            });
        },
        onError: (error) => console.error('Login Failed:', error)
    });

    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
    };

    useEffect(() => {
        // Additional logic if needed
    }, [user]);

    return (
        <AuthContext.Provider value={{ user: user as TokenClientConfig, profile, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}
