import { FormLoginParams } from "@/screens/Login/LoginForm";
import { dtMoneyApi } from "@/shared/api/dt-money";
import { IAuthenticateResponse } from "@/shared/interfaces/https/authenticate-response";

export const authenticate = async (
  useData: FormLoginParams
): Promise<IAuthenticateResponse> => {
  const { data } = await dtMoneyApi.post<IAuthenticateResponse>(
    "/auth/login",
    useData
  );

  return data;
};
