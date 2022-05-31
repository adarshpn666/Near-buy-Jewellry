import React from "react";
import { useSelector } from 'react-redux';

import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigation, HomeNavigation } from "./Navigation";
import StartingPage from "../Screens/StartingScreen/StartingPage";

const AppNavigation = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  return (
    <NavigationContainer>
      {isAuth && <HomeNavigation />}
      {!isAuth && !didTryAutoLogin && <AuthNavigation />}
      {/* {!isAuth && !didTryAutoLogin && <StartingPage />} */}
    </NavigationContainer>
  );
};

export default AppNavigation;
