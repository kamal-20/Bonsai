import React from 'react'
import { View, Text } from 'react-native'
import {Icon,Header} from 'react-native-elements';

const ArticleScreen = () => {
    return (
        <View>
            <Header
            placement="center"
            centerComponent={{ text: 'Articles', style: { color: '#000', fontSize: 20 } }}
            backgroundColor="white"
            />
        </View>
    )
}
ArticleScreen.navigationOptions = {
    title: 'Article',
    tabBarIcon: <Icon type='evilicon' name='chart' size={30}  />
  }
export default ArticleScreen;
