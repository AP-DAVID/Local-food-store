/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type Props = {};

const Featureddishes = (props: Props) => {
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
      <Text style={styles.title}>Featured Dishes</Text>
      <ScrollView
        horizontal={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <Animated.View style={[styles.categoryContainer, animatedStyle]}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://plus.unsplash.com/premium_photo-1674062989136-d217b86d45ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Dish Name</Text>
              <Text style={styles.cardPrice}>$10</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Dish Name</Text>
              <Text style={styles.cardPrice}>$12</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1602273660127-a0000560a4c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
              }}
              style={styles.cardImage}
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Dish Name</Text>
              <Text style={styles.cardPrice}>$15</Text>
            </View>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: '#888',
  },
});

export default Featureddishes;
