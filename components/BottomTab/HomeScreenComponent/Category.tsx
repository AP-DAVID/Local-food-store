/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { categories } from 'components/Shared/Categories';


const Category = () => {
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
      <Text style={styles.title}>Categories</Text>
      <View style={styles.categoryContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{paddingRight: 20}}>
          <Animated.View style={[styles.categoryContainer, animatedStyle]}>
            {categories.map(category => (
              <View className="pr-5" key={category.id} style={styles.category}>
                <Image
                  className="object-cover"
                  source={category.image}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
            ))}
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily: 'Montserrat-SemiBold',
    // fontFamily: 'Montserrat-Bold',
    // marginHorizontal: 20,
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
  },
  category: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  categoryName: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default Category;
