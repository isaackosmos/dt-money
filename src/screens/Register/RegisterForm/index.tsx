import { Text, View } from "react-native";

import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import { schema } from "./schema";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useAuthContext } from "@/context/auth.context";

export interface FormRegisterParams {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormRegisterParams>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const { handleRegister } = useAuthContext();

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const onSubmit = async (userData: FormRegisterParams) => {
    try {
      await handleRegister(userData);
    } catch (error) {
      if (error instanceof AxiosError) console.log(error.response?.data);
    }
  };

  return (
    <>
      <AppInput
        control={control}
        name="name"
        leftIconName="person"
        label="NOME"
        placeholder="Seu nome"
      />

      <AppInput
        control={control}
        name="email"
        leftIconName="mail-outline"
        label="EMAIL"
        placeholder="mail@example.br"
      />

      <AppInput
        control={control}
        name="password"
        leftIconName="lock-outline"
        label="SENHA"
        placeholder="Sua senha"
        secureTextEntry
      />

      <AppInput
        control={control}
        name="confirmPassword"
        leftIconName="lock-outline"
        label="SENHA"
        placeholder="Confirme sua senha"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="arrow-forward" onPress={handleSubmit(onSubmit)}>
          Cadastrar
        </AppButton>

        <View>
          <Text className="mb-6 text-gray-600 text-base">
            Já possui uma conta?
          </Text>

          <AppButton
            iconName="arrow-forward"
            mode="outline"
            onPress={() => navigation.navigate("Login")}
          >
            Acessar
          </AppButton>
        </View>
      </View>
    </>
  );
};
