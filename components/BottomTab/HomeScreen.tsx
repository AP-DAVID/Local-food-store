/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Category from './HomeScreenComponent/Category';
import Toprated from './HomeScreenComponent/Toprated';
import Featureddishes from './HomeScreenComponent/Featureddishes';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Text className='tracking-wider' style={styles.subtitle}>
          Browse food categories, top-rated vendors, and featured dishes
        </Text>
        <View style={styles.searchBar}>
          {/* add search bar component here */}
        </View>
      </View>
      <View style={styles.bottomSection}>
        <Category />
        {/* add top-rated vendors component here */}
        <Toprated />
        {/* add featured dishes component here */}
        <Featureddishes />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 3,
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
