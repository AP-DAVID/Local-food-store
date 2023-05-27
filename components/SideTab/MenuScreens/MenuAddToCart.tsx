import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {DrawerContext} from 'components/context/DrawerContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {Textin} from 'components/Shared/Reuse';
import BottomComp from './MenuAddComponent/BottomComp';
import MenuAddContent from './MenuAddComponent/MenuAddContent';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const MenuAddToCart = ({navigation: {navigate}}: Props) => {
  const {showDrawer} = useContext<any>(DrawerContext);
  useEffect(() => {
    showDrawer(false);
    return () => {
      showDrawer(true);
    };
  }, [showDrawer]);

  return (
    <View className="bg-slate-500" style={styles.container}>
      {/* Header and like */}
      <View className="h-1/5" style={styles.header}>
        <Icon
          onPress={() => {
            navigate('MenuHome');
          }}
          name="chevron-back-outline"
          size={25}
          color="white"
        />
        <Icon name="heart" size={25} color="white" />
      </View>

      {/* White background component */}
      <View style={styles.whiteBackground}>
        {/* Absolute positioned image */}
        <Image
          className="object-cover rounded-full "
          source={require('../../../assets/images/mexican.jpg')}
          style={styles.imageContainer}
        />

        {/* Content */}
        <View style={styles.content}>
          {/* Add your content here */}

          <Textin
            bold
            classn="text-lg mt-2 text-black text-center"
            data="Pounded yam"
          />
          <Textin classn="text-sn text-center" data="Poundo place" />

          {/* The Reviews and the clock */}
          <View className="flex-row justify-evenly my-2">
            <View className="flex-row space-x-4 items-center">
              <Icon name="time-outline" size={20} color="black" />
              <Textin classn="px-2" data="15 min" />
            </View>
            <Text>@</Text>
            <View className="flex-row items-center">
              <Icon name="star" color="orange" size={20} />
              <Textin data="4.8(2.2k review) >" />
            </View>
          </View>

          {/* The pricing, description, about*/}
          <ScrollView style={styles.scrollContent}>
            <MenuAddContent />
          </ScrollView>

          {/* The add to cart button and the increment */}
          <BottomComp />
        </View>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80, // Adjust this value to accommodate the height of MenuBottom component
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 50, // Adjust this value based on the height of the icon container
  },
  imageContainer: {
    position: 'absolute',
    top: -50,
    left: '50%',
    marginLeft: -50, // Adjust this value based on the image width
    width: 120, // Adjust this value based on the image width
    height: 120, // Adjust this value based on the image height
    borderRadius: 50,
    backgroundColor: 'red', // Remove this background color after adding your image component
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
    height: windowHeight - 50, // Subtract the height of the icon container
  },
});

export default MenuAddToCart;
