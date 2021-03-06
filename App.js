import React, { useState, useEffect } from 'react';
import {Icon,Header} from 'react-native-elements';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
//screens
import StartScreen from './src/screens/StartScreen';
import SignupScreen from './src/screens/SignupScreen';
import SigninScreen from './src/screens/SigninScreen';
import AccountScreen from './src/screens/AccountScreen';
import ShopScreen from './src/screens/ShopScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import authScreen from './src/screens/authScreen';
import UpcomingAuctionScreen from './src/screens/UpcomingAuctionScreen';
import OngoingAuctionScreen from './src/screens/OngoingAuctionScreen';
import AuctionDetailScreen from './src/screens/AuctionDetailScreen';
import ArticleDetailScreen from './src/screens/ArticleDetailScreen';

//provider
import { Provider as AuthProvider } from './src/context/AuthContext';
//rootnav)},
import { navigate, setNavigator } from './src/navigatorRef';
import { greaterThan } from 'react-native-reanimated';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const auctionTabs = createMaterialTopTabNavigator({
    UpcomingAuction: UpcomingAuctionScreen,                                    
    OngoingAuction: OngoingAuctionScreen 
  },{
      tabBarOptions:{
        activeTintColor:'green',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS,
        },
        indicatorStyle:{
          color: 'green',
          backgroundColor: 'green'
        }
      }
  });



const switchNavigator = createSwitchNavigator({
  authScreen: authScreen,
  loginFlow: createStackNavigator({
    Start: StartScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Shop: {
      screen:createStackNavigator({
        Category: {
          screen:ShopScreen,
          navigationOptions:{
            header:() => <Header
            placement="center"
            centerComponent={{ text: 'Categories', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
            backgroundColor="white"
          />
          }
        },
        Auction: {
          screen:auctionTabs,
          navigationOptions:{
            header:() => <Header
                          placement="center"
                          centerComponent={{ text: "Auctions", style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
                          backgroundColor="white"
                        />,
          }
                   
        },
        AuctionDetail : AuctionDetailScreen,
      }),
      navigationOptions: {
        title: 'Auctions',
        tabBarIcon: <Icon type='evilicon' name='archive' size={30}  />
      }
    },
    Article: {
      screen:createStackNavigator({
          ArticleList : {
            screen:ArticleScreen,
            navigationOptions:{
              header:() => <Header
              placement="center"
              centerComponent={{ text: 'Articles', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
              backgroundColor="white"
            />
            }
          },
          ArticleDetail: {
            screen:ArticleDetailScreen,
            navigationOptions:{
              header:() => <Header
              placement="center"
              centerComponent={{ text: 'Article ', style: { color: '#000', fontSize: 20, fontFamily: "sans-serif-condensed"} }}
              backgroundColor="white"
            />
            }
          }
      }),
      navigationOptions: {
        title: 'Articles',
        tabBarIcon: <Icon type='evilicon' name='chart' size={30}  />
      }
    },
    Gallery:{
      screen:GalleryScreen,
      navigationOptions: {
        title: 'Gallery',
        tabBarIcon: <Icon type='evilicon' name='image' size={30}  />,
        
      }
    },
    Account: {
      screen:AccountScreen,
      navigationOptions: {
        title: 'Account',
        tabBarIcon: <Icon type='evilicon' name='user' size={30}  />
    }
    },
  }),
});


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
    </AuthProvider>
  );
};