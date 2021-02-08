import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements';

const ShopScreen = () => {
    return (
        <View>
            <Text>ShopScreen</Text>
        </View>
    )
}

ShopScreen.navigationOptions = {
    title: 'Auctions',
    tabBarIcon: <Icon type='evilicon' name='archive' size={30}  />
  }

export default ShopScreen;
