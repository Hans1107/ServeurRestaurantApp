// eslint-disable-next-line import/no-unresolved
import React from "react";
import { StatusBar, } from "react-native";
import HomePage from "./(tabs)/screens/homePage";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HomePage />
    </>
  );
}