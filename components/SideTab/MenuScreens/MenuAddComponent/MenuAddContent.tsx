import {View, Text} from 'react-native';
import React from 'react';
import PriceCard from 'components/Shared/PriceCard';
import Input from 'components/Shared/Input';
import { Textin } from 'components/Shared/Reuse';

type Props = {};

const MenuAddContent = (props: Props) => {
  return (
    <View>
      <View className="flex-row my-3 justify-around">
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </View>
      
          {/* Enter Your food description, how you want it to be cooked */}
      <View className="flex-row justify-center">
        <Input
          iconName="newspaper"
          area={true}
          lines={7}
          placeholder="Food Description"
        />
          </View>
          
          {/* About the food */}
          <View className='my-2' >
              <Text className='tracking-wider text-center' style={{fontFamily : "Montserrat-Regular"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, magnam cupiditate et doloribus ullam dolor officiis magni, voluptatibus ipsa iure hic blanditiis libero. Eaque repellat accusamus facere officia, id excepturi.</Text>
          </View>
    </View>
  );
};

export default MenuAddContent;
