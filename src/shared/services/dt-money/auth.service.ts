import { dtMoneyApi } from "@/shared/api/dt-money";
import { FormLoginParams } from "@/screens/Login/LoginForm";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";
import { FormRegisterParams } from "@/screens/Register/RegisterForm";

export const authenticate = async (
  useData: FormLoginParams
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    useData
  );

  return data;
};

export const registerUser = async (
  userData: FormRegisterParams
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/register",
    userData
  );
  return data;
};
