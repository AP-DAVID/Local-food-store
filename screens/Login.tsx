/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Image from "../assets/backg/black4.jpg";
import LoginComp from "components/Auth/LoginComp";

type Props = {
  route: any;
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const Login = ({ route, navigation: { navigate } }: Props) => {
  const { values } = route.params;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="position"
        keyboardVerticalOffset={-150}
      >
        <View style={styles.container}>
          <ImageBackground
            source={Image}
            resizeMode="cover"
            style={styles.background}
            className="bg-black h-screen object-cover"
          >
            <LoginComp emailData={values.email} navigate={navigate} />
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Login;
