import { FormLoginParams } from "@/screens/Login/LoginForm";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

type AuthContextType = {
  user: null;
  token: string | null;
  handleAuth: (params: FormLoginParams) => Promise<void>;
  handleRegister: (params: FormRegisterParams) => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const handleAuth = async ({ email, password }: FormLoginParams) => {};
  const handleRegister = async (formData: FormRegisterParams) => {};
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
