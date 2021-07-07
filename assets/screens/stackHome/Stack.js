import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import SimGeneral from './SimGeneral'
import Simulated from './Simulated'

const Stack = createStackNavigator()

function home({navigation}) {

    return(
        <Home  toSimGeneral={()=>navigation.navigate('GeneralSimulated')} />
    )
} 

function simGeneral({navigation}) {

    const [valQuestion, setValQuestion] = useState(28)
    

    return(
        <SimGeneral valQuest={valQuestion} setValQuest={setValQuestion} toSimulated={() => navigation.navigate('Simulado')}/>
    )
}

function questions() {
    return(
      <Simulated />
    )
}

export default function App() {
  return (
   <Stack.Navigator>
       <Stack.Screen
            name='Home'
            component={home}
            options={{
                title: 'Olá, Alef',
                headerStyle: {
                    backgroundColor: '#40405B'
                },
                headerTintColor: '#EAEAFF',
                headerTitleStyle: {
                    fontFamily: 'Nunito-Bold',
                    fontSize: 18,
                },
                headerRight: () => (
                    <Image
                        source={require('../../src/img/love.png')}
                        resizeMode='contain'
                        style={{
                            width: 18,
                            height: 18,
                            borderWidth: 1,
                            marginRight: 14,
                        }}
                    />
                ),
            }}
       />
       <Stack.Screen
            name='GeneralSimulated'
            component={simGeneral}
            options={{
                title: '',
                headerStyle: {
                    backgroundColor: '#40405B'
                },
                headerTintColor: '#EAEAFF',
                headerTitleStyle: {
                    fontFamily: 'Nunito-Bold',
                    fontSize: 18,
                },
                headerRight: () => (
                    <Text style={{
                        fontFamily: 'Nunito-Bold',
                        fontSize: 16,
                        color: '#EAEAFF',
                        marginRight: 22
                    }}>
                        Geral
                    </Text>
                ),
            }}
       />
       <Stack.Screen 
            name="Simulado"
            component={Simulated}
            options={{headerShown: false}}
        />
   </Stack.Navigator>
  )
}

const style = StyleSheet.create({
  
})