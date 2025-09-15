import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "@/screens/Home";

export type PrivateRoutesParamsList = {
  Home: undefined;
};

export const PrivateRoutes = () => {
  const PrivateStack = createStackNavigator<PrivateRoutesParamsList>();

  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name="Home" component={Home} />
    </PrivateStack.Navigator>
  );
};
