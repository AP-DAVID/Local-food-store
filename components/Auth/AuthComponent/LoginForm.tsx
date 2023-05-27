/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  Alert,
} from 'react-native';
import React, {FormEvent, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  Button,
  PressText,
  Social,
  Textin,
  Textinput,
} from 'components/Shared/Reuse';
import Icon from 'react-native-vector-icons/Ionicons';
import {Toast} from 'toastify-react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

type Props = {
  navigate: (route: string, query?: any) => void;
};

const LoginForm = ({navigate}: Props) => {
  const [activity, setActivity] = useState(false);

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const handleLogin = async (values: any) => {
    setActivity(true);
    auth()
      .fetchSignInMethodsForEmail(values.email)
      .then(signInMethods => {
        if (signInMethods.length === 0) {
          Toast.error('Email does not exist');
          setActivity(false);
        } else {
          setActivity(false);
          navigate('Login', {values});
        }
      })
      .catch(error => {
        Toast.error(`Error fetching sign-in methods for email: ${error}`);
        setActivity(false);
      });
  };

  return (
    <View className="w-screen flex-col items-center h-screen justify-center">
      <Text
        style={{fontFamily: 'Montserrat-Regular'}}
        className="text-white w-full px-2 text-start text-lg py-2 font-bold">
        HI!
      </Text>
      {/* Form */}
      <View
        style={styles.view2}
        className=" w-4/5 px-5 rounded-xl space-y-5 py-5 shadow-xl">
        <Formik
          initialValues={{email: ''}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email address')
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
                blur={handleBlur('email')}
                secure={false}
                onChange={handleChange('email')}
                value={values.email}
                Keyboard="email-address"
                placeholder="Email-Address"
                className={undefined}
              />
              {errors.email && touched.email && (
                <Text
                  className="tracking-wider px-2 text-red-300"
                  style={{fontFamily: 'Montserrat-Regular'}}>
                  {errors.email}
                </Text>
              )}

              <Button
                activity={activity}
                text="Continue"
                onPress={(event: GestureResponderEvent) => {
                  handleSubmit(event as unknown as FormEvent<HTMLFormElement>);
                }}
                className={undefined}
              />
            </View>
          )}
        </Formik>

        {/* The Sign In with google component */}
        <View className="flex-col ">
          <Textin classn="text-center text-white" data="OR" />
          <Social
            Press={() =>
              onGoogleButtonPress().then(() => {
                Toast.success('Signed in with Google!');
              })
            }
            Icon={Icon}
            color="#4F8EF7"
            iconName="logo-google"
            text="Continue with Google"
          />
          {/* <Social
            Press={() =>
              onGoogleButtonPress().then(() => {
                Toast.success('Signed in with Google!');
              })
            }
            Icon={Icon}
            color="#4F8EF7"
            iconName="logo-facebook"
            text="Continue with facebook" */}
          {/* />
          <Social
            Press={() =>
              onGoogleButtonPress().then(() => {
                Toast.success('Signed in with Google!');
              })
            }
            Icon={Icon}
            color="#4F8EF7"
            iconName="logo-twitter"
            text="Continue with twitter"
          /> */}
        </View>

        {/* Navigation to signup center */}
        <View className="flex-row px-2 mt-3 ">
          <Textin classn="text-white" data="Don't have an account?" />
          <PressText
            onPress={() => {
              navigate('Signup');
            }}
            classn="text-green-500 px-2"
            data="Sign up ?"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  view2: {
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
});
