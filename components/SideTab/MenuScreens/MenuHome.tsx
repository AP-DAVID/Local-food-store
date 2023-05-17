/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

type Props = {};

const MenuHome = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text>MenuHome</Text>
    </ScrollView>
  );
};

export default MenuHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
