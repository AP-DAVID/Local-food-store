import {View, Text} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {DrawerContext} from 'components/context/DrawerContext';

type Props = {};

const MapMonitor = (props: Props) => {
  const {showDrawer} = useContext<any>(DrawerContext);
  useEffect(() => {
    showDrawer(false);
    return () => {
      showDrawer(true);
    };
  }, [showDrawer]);
  return (
    <View>
      <Text>MapMonitor</Text>
    </View>
  );
};

export default MapMonitor;
