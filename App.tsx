import "./src/styles/global.css";

import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes />
    </AuthContextProvider>
  );
}
