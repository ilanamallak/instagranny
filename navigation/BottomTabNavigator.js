import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WIP from '../components/WIP';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME} tabBarOptions={{labelStyle: {fontWeight: 'bold', fontSize: 14}, activeTintColor: '#010101'}}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={WIP}
        options={{
          title: 'Enviar Foto',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-image" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={WIP}
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />
        }}
      />
    </BottomTab.Navigator>
  );
}
