import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {categories} from 'components/Shared/Categories';

type Props = {};

const MenuCategory = (props: Props) => {
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
    <View style={{paddingHorizontal: 10}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{paddingRight: 20}}>
        <Animated.View  style={[styles.categoryContainer, animatedStyle]}>
          {categories.map(category => (
            <View className="pr-5 mx-2 px-2 py-2 rounded-md border border-slate-300 " key={category.id} style={styles.category}>
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
  );
};

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
    width: 40,
    height: 40,
    borderRadius: 40,
    marginBottom: 10,
  },
  categoryName: {
    fontFamily: 'Montserrat-Regular',
  },
});

export default MenuCategory;
