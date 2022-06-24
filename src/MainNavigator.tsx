/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home'
import Dream from './Dream'
import Mypage from './Mypage'
import HomeSvg from './assets/images/home.svg'
import DreamSvg from './assets/images/dream.svg'
import MypageSvg from './assets/images/mypage.svg'

const Tab = createBottomTabNavigator()

// prettier-ignore
export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="메인" component={Home} options={{tabBarIcon: ({}) => (
          <HomeSvg />
        ), headerShown: false}}/>
      <Tab.Screen name="꿈 여행하기" component={Dream} options={{tabBarIcon: ({}) => (
          <DreamSvg />
        ), headerShown: false}}/>
      <Tab.Screen name="마이페이지" component={Mypage} options={{tabBarIcon: ({}) => (
          <MypageSvg />
        ), headerShown: false}}/>
    </Tab.Navigator>

  )
}
