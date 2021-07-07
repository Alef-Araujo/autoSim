import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Progress from './assets/screens/Progress'
import Routine from './assets/screens/stackRoutine/Routine'
import StackHome from './assets/screens/stackHome/Stack'


function TabHome() {
  return (
    <StackHome/>
  );
}

function TabProgress() {
  return (
    <Progress />
  );
}


function TabRoutine() {
  return (
    <Routine />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: '#212133',
            height: 40,
            borderTopWidth: 0,
            borderTopWidth: 1,
            borderTopColor: '#656565'
          },
        }}
      >
        <Tab.Screen
          name="Inicio" component={TabHome}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./assets/src/img/home.png')}
                  resizeMode='contain'
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: focused ? '#F5F5FF' : '#656565'
                  }}
                />
              </View>
            )
          }}
        />
        <Tab.Screen 
          name="Progresso" component={TabProgress}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./assets/src/img/progress.png')}
                  resizeMode='contain'
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#F5F5FF' : '#656565'
                  }}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name="Rotina" component={TabRoutine}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./assets/src/img/routine.png')}
                  resizeMode='contain'
                  style={{
                    width: 23,
                    height: 23,
                    tintColor: focused ? '#F5F5FF' : '#656565'
                  }}
                />
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  
})