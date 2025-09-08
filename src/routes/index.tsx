import { useCallback, useState } from "react";

import { SystemBars } from "react-native-edge-to-edge";
import { NavigationContainer } from "@react-navigation/native";

import { Loading } from "@/screens/Loading";

import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

import { useAuthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
  const [loading, setLoading] = useState(true);
  const { user, token } = useAuthContext();

  const Routes = useCallback(() => {
    if (loading) {
      return <Loading setLoading={setLoading} />;
    }

    if (!user && !token) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [user, token, loading]);

  return (
    <NavigationContainer>
      <SystemBars style={"light"} />
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
