import "./src/styles/global.css";

import { SnackBar } from "@/components/SnackBar";

import { AuthContextProvider } from "@/context/auth.context";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { SnackBarContextProviver } from "@/context/snackBar.context";

import NavigationRoutes from "@/routes";

export default function App() {
  return (
    <SnackBarContextProviver>
      <AuthContextProvider>
        <BottomSheetProvider>
          <NavigationRoutes />
        </BottomSheetProvider>
        <SnackBar />
      </AuthContextProvider>
    </SnackBarContextProviver>
  );
}
