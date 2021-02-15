import React from 'react'
import { SafeAreaView } from 'react-native';
import { View, Text } from 'react-native'
import {Card, Icon,Button} from 'react-native-elements';

const ShopScreen = () => {
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    )
}

ShopScreen.navigationOptions = {
    title: 'Auctions',
    tabBarIcon: <Icon type='evilicon' name='archive' size={30}  />
  }

export default ShopScreen;
