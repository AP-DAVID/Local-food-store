/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { vendors } from 'components/Shared/Vendors';

type Props = {};

const TopRated = (props: Props) => {
  const translateX = useSharedValue(0);

  const handleScroll = (e: any) => {
    translateX.value = e.nativeEvent.contentOffset.x;
  };

  const getAnimation = useDerivedValue(() => {
    return withSpring(translateX.value);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: -getAnimation.value}],
    };
  });



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Rated Vendors</Text>
      <ScrollView
        horizontal={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <Animated.View style={[styles.categoryContainer, animatedStyle]}>
          {vendors.map((vendor, index) => (
            <View style={styles.vendorCard} key={index}>
              <Image style={styles.vendorImage} source={{uri: vendor.image}} />
              <Text style={styles.vendorName}>{vendor.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>{vendor.rating}</Text>
                <Text style={styles.reviews}>({vendor.reviews} Reviews)</Text>
              </View>
            </View>
          ))}
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    // paddingHorizontal: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
  },
  vendorCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 150,
    height: 200,
  },
  vendorImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  vendorName: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#999',
  },
});

export default TopRated;
