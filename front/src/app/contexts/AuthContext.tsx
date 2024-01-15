// AuthContext.tsx
'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import UserService from '../services/UserService';

interface AuthContextType {
  logged: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(false);

    const login = async (email: string, password: string) => {
    try {
      // Perform your asynchronous authentication logic here
      // For simplicity, let's assume a dummy asynchronous check
      // Replace this with your actual authentication API call
        const res = await UserService.checkUser(email, password);
        const data = res.data;
        console.log("auth context");
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));

      // If authentication is successful, set the logged state to true
        if(data){
            setLogged(true);
        }
    } catch (error) {
        console.error('Authentication failed', error);
      // Handle authentication failure if needed
    }
    };

    const logout = () => setLogged(false);

    const contextValue: AuthContextType = {
    logged,
    login,
    logout,
};

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
