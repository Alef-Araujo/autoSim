import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Confirm(props) {
    switch (props.situation) {
        case '0':
            return(
                <Image
                    source={require('../src/img/confirm.png')}
                    resizeMode='contain'
                    style={{
                        width: 22,
                        height: 22,
                    }}
                />
            )
        case 'win':
            return(
                <Image
                    source={require('../src/img/proceed.png')}
                    resizeMode='contain'
                    style={{
                        width: 22,
                        height: 22,
                        tintColor: '#A4F374'
                    }}
                />
            )
        case 'loss':
            return(
                <Image
                    source={require('../src/img/proceed.png')}
                    resizeMode='contain'
                    style={{
                        width: 22,
                        height: 22,
                        tintColor: '#F47171'
                    }}
                />
            )
        default:
            return(
                <Image
                    source={require('../src/img/confirm.png')}
                    resizeMode='contain'
                    style={{
                        width: 22,
                        height: 22,
                    }}
                />
            )
    }
}

const style = StyleSheet.create({
    
})