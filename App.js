import React, { useState, useEffect } from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
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
import { setNavigator } from './src/navigatorRef';
//firebase




const switchNavigator = createSwitchNavigator({
  authScreen: authScreen,
  loginFlow: createStackNavigator({
    Start: StartScreen,
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Shop: createStackNavigator({
      Category: ShopScreen,
      UpcomingAuction: UpcomingAuctionScreen,
      OngoingAuction: OngoingAuctionScreen,
      AuctionDetail : AuctionDetailScreen,
    }),
    Article: createStackNavigator({
      ArticleList : ArticleScreen,
      ArticleDetail: ArticleDetailScreen
    }),
    Gallery: GalleryScreen,
    Account: AccountScreen,
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