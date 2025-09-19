import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/shared/colors";
import { useAuthContext } from "@/context/auth.context";
import { useBottomSheetContext } from "@/context/bottomSheet.context";

export const AppHeader = () => {
  const { handleLogout } = useAuthContext();
  const { openBottomSheet } = useBottomSheetContext();

  return (
    <View className="w-full flex-row p-8 justify-between">
      <View>
        <Image
          source={require("@/assets/Logo.png")}
          className="w-[130px] h-[30px]"
        />
        <TouchableOpacity
          className="flex-row items-center mt-2 gap-2"
          onPress={handleLogout}
        >
          <MaterialIcons name="logout" color={colors.gray[700]} size={15} />
          <Text className="text-gray-700 text-base">Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => openBottomSheet(<Text>Nova transação</Text>, 0)}
        className="bg-accent-brand w-[130px] items-center justify-center rounded-xl h-[50px]"
      >
        <Text className="text-white text-sn font-bold">Nova transação</Text>
      </TouchableOpacity>
    </View>
  );
};
