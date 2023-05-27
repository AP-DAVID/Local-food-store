/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import SignupForm from "./AuthComponent/SignupForm";

type Props = {
  navigate: (route: string, query?: any) => void;
};

const Signupp = ({ navigate }: Props) => {
  return (
    <View
      style={styles.view1}
      className=" h-screen items-center flex-col justify-end"
    >
      <View>
        <SignupForm navigate={navigate} />
      </View>
    </View>
  );
};

export default Signupp;

const styles = StyleSheet.create({
  view1: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
