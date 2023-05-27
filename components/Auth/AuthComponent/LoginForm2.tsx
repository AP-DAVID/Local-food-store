/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  View,
  Text,
  StyleSheet,
  Image,
  GestureResponderEvent,
  Alert,
} from 'react-native';
import React, {FormEvent, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Textinput, Button, PressText, Textin} from 'components/Shared/Reuse';
import {Toast} from 'toastify-react-native';
import auth from '@react-native-firebase/auth';

type Props = {
  navigate: (route: string, query?: any) => void;
  emailData: string;
};

const LoginForm2 = ({navigate, emailData}: Props) => {
  let username = emailData.split('@')[0];
  const [activity, setActivity] = useState(false);

  const handleLogin = async (values: any) => {
    setActivity(true);
    auth().signInWithEmailAndPassword(emailData, values.password)
      .then(userCredential => {
        // Signed in
        Toast.success('Signed In successfully');
        setActivity(false);
        navigate('Start');
      })
      .catch(error => {
        Toast.error(error.message);
        setActivity(false);
      });
  };

  return (
    <View className="w-screen flex-col items-center h-screen justify-center">
      <Text
        style={{fontFamily: 'Montserrat_400Regular'}}
        className="text-white w-full px-2 text-start text-lg py-2 font-bold">
        Log In!
      </Text>
      {/* Form */}
      <View
        style={styles.view2}
        className=" w-4/5 px-5 rounded-xl space-y-5 py-5 shadow-xl">
        {/* show image */}
        <View className="flex-row py-2 px-2 space-x-2">
          {/* <Image
            className="h-10 w-10 rounded-full object-cover"
            source={{
              uri: "https://images.unsplash.com/photo-1523912277209-5fd38d4d667e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            }}
          /> */}

          <View className="flex-col space-y-2">
            <Textin classn="text-white" data={username} />
            <Textin classn="text-slate-200" data={emailData} />
          </View>
        </View>

        {/* The login Form */}
        <Formik
          initialValues={{password: ''}}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(8, 'Must be at least 8 characters')
              .required('Required'),
          })}
          onSubmit={(values, {resetForm}) => {
            handleLogin(values);
            resetForm();
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <Textinput
                blur={handleBlur('password')}
                onChange={handleChange('password')}
                value={values.password}
                secure={true}
                Keyboard={undefined}
                placeholder="Password"
                className={undefined}
              />
              {errors.password && touched.password && (
                <Text
                  className="tracking-wider px-2 text-red-300"
                  style={{fontFamily: 'Montserrat-Regular'}}>
                  {errors.password}
                </Text>
              )}

              <Button
                text="Login"
                activity={activity}
                onPress={(event: GestureResponderEvent) => {
                  handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
                }}
                className={undefined}
              />
            </View>
          )}
        </Formik>

        <PressText
          onPress={undefined}
          classn="text-green-500 px-2 mt-2 py-2"
          data="Forgot your password?"
        />
      </View>
    </View>
  );
};

export default LoginForm2;

const styles = StyleSheet.create({
  view2: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
});
