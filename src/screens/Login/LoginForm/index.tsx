import { ActivityIndicator, Text, View } from "react-native";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigationProp, useNavigation } from "@react-navigation/native";

import { AppInput } from "@/components/AppInput";
import { AppButton } from "@/components/AppButton";

import { useAuthContext } from "@/context/auth.context";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";

import { schema } from "./schema";
import { colors } from "@/shared/colors";

export interface FormLoginParams {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormLoginParams>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();

  const { handleAuth } = useAuthContext();
  const { handleError } = useErrorHandler();

  const onSubmit = async (userData: FormLoginParams) => {
    try {
      await handleAuth(userData);
    } catch (error) {
      handleError(error, "Falha ao logar.");
    }
  };

  return (
    <>
      <AppInput
        control={control}
        name="email"
        label="EMAIL"
        leftIconName="mail-outline"
        placeholder="mail@example.com"
      />

      <AppInput
        control={control}
        name="password"
        label="SENHA"
        placeholder="Sua senha"
        leftIconName="lock-outline"
        secureTextEntry
      />

      <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
        <AppButton iconName="arrow-forward" onPress={handleSubmit(onSubmit)}>
          {isSubmitting ? <ActivityIndicator color={colors.white} /> : "Login"}
        </AppButton>

        <View>
          <Text className="mb-6 text-gray-600 text-base">
            Ainda não possui uma conta?
          </Text>
          <AppButton
            iconName="arrow-forward"
            mode="outline"
            onPress={() => navigation.navigate("Register")}
          >
            Cadastrar
          </AppButton>
        </View>
      </View>
    </>
  );
};
