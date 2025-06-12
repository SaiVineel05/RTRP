import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

interface User {
  id: string;
  name: string;
  email: string;
  village?: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  village?: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('vitt-mukti-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error || !data.user) return false;
      setUser({
        id: data.user.id,
        name: data.user.user_metadata.name || '',
        email: data.user.email || '',
        village: data.user.user_metadata.village,
        phone: data.user.user_metadata.phone,
      });
      localStorage.setItem('vitt-mukti-user', JSON.stringify({
        id: data.user.id,
        name: data.user.user_metadata.name || '',
        email: data.user.email || '',
        village: data.user.user_metadata.village,
        phone: data.user.user_metadata.phone,
      }));
      return true;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            village: userData.village,
            phone: userData.phone,
          },
        },
      });
      if (error) throw error;
      setUser({
        id: data.user?.id ?? '',
        name: userData.name,
        email: userData.email,
        village: userData.village,
        phone: userData.phone,
      });
      localStorage.setItem('vitt-mukti-user', JSON.stringify({
        id: data.user?.id ?? '',
        name: userData.name,
        email: userData.email,
        village: userData.village,
        phone: userData.phone,
      }));
      return true;
    } catch (error) {
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vitt-mukti-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};