import "./src/styles/global.css";

import { SnackBar } from "@/components/SnackBar";

import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProviver } from "@/context/snackBar.context";

import NavigationRoutes from "@/routes";

export default function App() {
  return (
    <SnackBarContextProviver>
      <AuthContextProvider>
        <NavigationRoutes />
        <SnackBar />
      </AuthContextProvider>
    </SnackBarContextProviver>
  );
}
