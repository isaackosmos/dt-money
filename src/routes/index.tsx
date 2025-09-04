import { useCallback } from "react";

import { SystemBars } from "react-native-edge-to-edge";
import { NavigationContainer } from "@react-navigation/native";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { useAuthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
  const { user, token } = useAuthContext();

  const Routes = useCallback(() => {
    if (!user && !token) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, []);

  return (
    <NavigationContainer>
      <SystemBars style={"light"} />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
