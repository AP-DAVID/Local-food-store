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

  const vendors = [
    {
      name: 'Vendor 1',
      image:
        'https://images.unsplash.com/photo-1494587546596-02ba5ee8f96f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZCUyMHZlbmRvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      rating: 4.5,
      reviews: 120,
    },
    {
      name: 'Vendor 2',
      image:
        'https://images.unsplash.com/photo-1471110338536-858caa3dbe45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHZlbmRvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      rating: 4.8,
      reviews: 250,
    },
    {
      name: 'Vendor 3',
      image:
        'https://images.unsplash.com/photo-1528952686551-542043782ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHZlbmRvcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      rating: 4.2,
      reviews: 80,
    },
    {
      name: 'Vendor 4',
      image:
        'https://images.unsplash.com/photo-1517821362941-f7f753200fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjB2ZW5kb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.6,
      reviews: 200,
    },
    {
      name: 'Vendor 5',
      image:
        'https://images.unsplash.com/photo-1502270967-313b92f64d94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjB2ZW5kb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      rating: 4.4,
      reviews: 150,
    },
  ];

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
