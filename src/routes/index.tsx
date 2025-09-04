import { useCallback } from "react";

import { SystemBars } from "react-native-edge-to-edge";
import { NavigationContainer } from "@react-navigation/native";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { useAuthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
  const { user, token } = useAuthContext();

  const Routes = useCallback(() => {
    return user && token ? <PrivateRoutes /> : <PublicRoutes />;
  }, []);

  return (
    <NavigationContainer>
      <SystemBars style={"light"} />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
