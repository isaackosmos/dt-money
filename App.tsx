import "./src/styles/global.css";

import { SnackBar } from "@/components/SnackBar";

import { AuthContextProvider } from "@/context/auth.context";
import { BottomSheetProvider } from "@/context/bottomSheet.context";
import { SnackBarContextProvider } from "@/context/snackBar.context";

import NavigationRoutes from "@/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <SnackBarContextProvider>
        <AuthContextProvider>
          <BottomSheetProvider>
            <NavigationRoutes />
          </BottomSheetProvider>
          <SnackBar />
        </AuthContextProvider>
      </SnackBarContextProvider>
    </GestureHandlerRootView>
  );
}
