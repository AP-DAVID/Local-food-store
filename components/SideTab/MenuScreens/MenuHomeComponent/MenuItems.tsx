import {View, Pressable, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {categories} from 'components/Shared/Categories';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigate: (route: string, query?: any) => void;
};

const MenuItems = ({navigate}: Props) => {
  const renderCategories = () => {
    return categories.map(category => (
      <Pressable
        onPress={() => {
          navigate('MenuAdd');
        }}
        key={category?.id}
        className=" py-2 px-2"
        style={styles.gridItem}>
        <Text style={{fontFamily: 'Montserrat-Bold'}}>Melting Cheese</Text>
        <Text className="text-center">
          {' '}
          <Text className="text-green-500">$</Text> 99
        </Text>

        <Image
          className="object-cover w-20 h-20 rounded-full mx-2 my-2"
          source={category?.image}
        />
        {/* Bottom */}
        <View className="flex-row justify-between space-x-2 items-center">
          <View>
            <View className="flex-row items-center">
              <Icon name="flame" size={10} color="orange" />
              <Text
                className="text-xs"
                style={{fontFamily: 'Montserrat-Regular'}}>
                44 calories
              </Text>
            </View>

            <View className="flex-row items-center">
              <Icon name="time-outline" size={10} color="black" />
              <Text
                className="text-xs "
                style={{fontFamily: 'Montserrat-Regular'}}>
                20 mins
              </Text>
            </View>
          </View>

          {/* right */}
          <View>
            <Icon name="albums-outline" size={20} />
          </View>
        </View>
      </Pressable>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular</Text>
      <View style={styles.gridContainer}>{renderCategories()}</View>
    </View>
  );
};

export default MenuItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  heading: {
    paddingVertical: 10,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    // height: 150,
    width: '45%', // Adjust this value to determine the width of each grid item
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#e8ebe9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
