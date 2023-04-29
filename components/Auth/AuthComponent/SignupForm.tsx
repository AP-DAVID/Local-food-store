/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import React, {FormEvent, useState} from 'react';
import {Button, PressText, Textin, Textinput} from 'components/Shared/Reuse';
import {Formik} from 'formik';
import * as Yup from 'yup';
import auth from '@react-native-firebase/auth';
import {Toast} from 'toastify-react-native';
type Props = {
  navigate: (route: string, query?: any) => void;
};

const SignupForm = ({navigate}: Props) => {
  const [activity, setActivity] = useState(false);

  const handleSignup = async (values: any) => {
    setActivity(true);
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      // Get the currently signed-in user

      auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in, update their display name
          user
            .updateProfile({
              displayName: values.fullname,
            })
            .then(() => Toast.success('User profile updated successfully!'))
            .catch(error =>
              Toast.error('Error updating user profile:'),
            );
        }
      });
      Toast.success('User account created successfully!');
      navigate('Home');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Toast.error('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Toast.error('That email address is invalid!');
      } else {
        console.log(error);
        Toast.error('Cannot Create Account');
      }
    }
  };

  return (
    <View className="w-screen flex-col items-center h-screen justify-center">
      <Text
        style={{fontFamily: 'Montserrat-Regular'}}
        className="text-white w-full px-2 tracking-widest text-start text-xl py-2 font-bold">
        Sign up!
      </Text>
      {/* Form */}
      <Formik
        initialValues={{email: '', password: '', fullname: ''}}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit={(values, {resetForm}) => {
          handleSignup(values);
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
          <View
            style={styles.view2}
            className=" w-4/5 px-5 rounded-xl space-y-5 py-5 shadow-xl">
            <Textin
              classn="text-slate-200 px-2 py-2 tracking-wider"
              data="Looks like you don't have an account, let's create a new account for you"
            />

            <>
              {/* The fulklname field*/}
              <Textinput
                blur={handleBlur('fullname')}
                onChange={handleChange('fullname')}
                Keyboard="default"
                value={values.fullname}
                secure={false}
                className={undefined}
                placeholder="Enter your fullname"
              />
              {errors.fullname && touched.fullname && (
                <Text
                  className="tracking-wider px-2 text-red-300"
                  style={{fontFamily: 'Montserrat-Regular'}}>
                  {errors.fullname}
                </Text>
              )}

              {/* The email field */}
              <Textinput
                blur={handleBlur('email')}
                onChange={handleChange('email')}
                value={values.email}
                Keyboard="email-address"
                secure={false}
                className={undefined}
                placeholder="Enter your email"
              />
              {errors.email && touched.email && (
                <Text
                  className="tracking-wider px-2 text-red-300"
                  style={{fontFamily: 'Montserrat-Regular'}}>
                  {errors.email}
                </Text>
              )}
              {/* The password field */}
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

              <Textin
                classn="text-white tracking-wider px-2 py-2"
                data="By selecting Agree and Continue below, I agree to the"
              />
              <PressText
                onPress={undefined}
                classn="text-green-400 px-2 tracking-wilder"
                data="Terms of Service and Privacy Policy"
              />
              <Button
                activity={activity}
                text="Agree and Continue"
                onPress={(event: GestureResponderEvent) => {
                  handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
                }}
                className={undefined}
              />
            </>

            <PressText
              onPress={undefined}
              classn="text-green-500 px-2 mt-2 py-2"
              data="Forgot your password?"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignupForm;

const styles = StyleSheet.create({
  view2: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
});
