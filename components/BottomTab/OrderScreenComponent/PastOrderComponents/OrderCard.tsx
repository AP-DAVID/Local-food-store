/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, ScrollView, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {categories} from 'components/Shared/Categories';

type Props = {
  navigate: (route: string, query?: any) => void;
};

const OrderCard = ({navigate}: Props) => {
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

  const arr = [1, 2, 3, 4, 5];
  return (
    <Pressable onPress={() => {navigate("MapMonitor")}} className="flex-row justify-center py-5">
      {/* The top card */}
      <View className="px-2 py-2 w-4/5 bg-white shadow-sm ">
        <View className="px-2 py-2 flex-row justify-between items-center">
          <View className="flex-col space-y-1">
            <Text
              className="text-slate-500 tracking-wide"
              style={{fontFamily: 'Montserrat-SemiBold'}}>
              Home - Baker Street
            </Text>
            <Text
              className="text-slate-500 tracking-widest"
              style={{fontSize: 12, fontFamily: 'Montserrat-Regular'}}>
              Jan 24, 2020 | 20:04
            </Text>
          </View>
          <View>
            <Icon name="chevron-forward-outline" size={20} color="#acacac" />
          </View>
        </View>
        {/* The image scroll */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            contentContainerStyle={{paddingRight: 20}}>
            <Animated.View style={[styles.categoryContainer, animatedStyle]}>
              {categories.map(category => (
                <View
                  className="pr-5"
                  key={category.id}
                  style={styles.category}>
                  <Image
                    className="object-cover h-8 w-8"
                    source={category.image}
                    style={styles.categoryImage}
                  />
                </View>
              ))}
            </Animated.View>
          </ScrollView>
        </View>

        {/* The bottom card */}
        <View className="flex-row px-2 py-2">
          <View className="w-1/3">
            <Text
              className="text-slate-500 py-1 tracking-wider"
              style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
              Order Rate
            </Text>

            {/* The rating */}
            <View className="flex-row space-x-1  w-full">
              {arr.map(r => (
                <Icon name="star" key={r} color="orange" />
              ))}
              {/* <Icon name="star" color="orange" /> */}
            </View>
          </View>
          <View className="w-1/3">
            <Text
              className="text-slate-500 py-1 tracking-wider"
              style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
              Products
            </Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 11}}>
              15 Products
            </Text>
          </View>
          <View className="w-1/3">
            <Text
              className="text-slate-500 py-1 tracking-wider"
              style={{fontFamily: 'Montserrat-Regular', fontSize: 13}}>
              Order Price
            </Text>
            <Text style={{fontFamily: 'Montserrat-Regular', fontSize: 11}}>
              $147.99
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    borderRadius: 40,
    marginBottom: 10,
  },
});
