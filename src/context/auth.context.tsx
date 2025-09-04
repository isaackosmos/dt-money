import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";

import { IUser } from "@/shared/interfaces/user-interface";
import * as authService from "@/shared/services/dt-money/auth.service";

type AuthContextType = {
  user: IUser | null;
  token: string | null;
  handleAuth: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleAuth = async (userData: FormLoginParams) => {
    const { token, user } = await authService.authenticate(userData);
    setUser(user);
    setToken(token);
  };
  const handleRegister = async (formData: FormRegisterParams) => {
    const { token, user } = await authService.registerUser(formData);
    setUser(user);
    setToken(token);
  };

  const handleLogout = () => {};

  return (
    <AuthContext.Provider
      value={{ user, token, handleAuth, handleRegister, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
