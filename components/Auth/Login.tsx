/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import LoginForm from "./AuthComponent/LoginForm";

type Props = {
  navigate: (route: string, query?: any) => void;
};

const Login = ({ navigate }: Props) => {
  return (
    <View
      style={styles.view1}
      className=" h-screen items-center flex-col justify-end"
    >
      <View>
        <LoginForm navigate={navigate} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
