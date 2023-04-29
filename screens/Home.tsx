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
import Image from "../assets/backg/black4.jpg";
import React from "react";
import Login from "components/Auth/Login";

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};
const Home = ({ navigation: { navigate } }: Props) => {
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
            <Login navigate={navigate} />
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

export default Home;
