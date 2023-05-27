/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import LoginForm2 from "./AuthComponent/LoginForm2";

type Props = {
  navigate: (route: string, query?: any) => void;
  emailData: string;
};

const LoginComp = ({ navigate, emailData }: Props) => {
  return (
    <View
      style={styles.view1}
      className=" h-screen items-center flex-col justify-end"
    >
      <View>
        <LoginForm2 emailData={emailData} navigate={navigate} />
      </View>
    </View>
  );
};

export default LoginComp;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
