// eslint-disable-next-line import/no-unresolved
import React from "react";
import { StatusBar, } from "react-native";
import LoginScreen from "./(tabs)/screens/login";
import HomePage from "./(tabs)/screens/homePage";
import MenuPage from "./(tabs)/screens/menuPage";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MenuPage />
    </>
  );
}