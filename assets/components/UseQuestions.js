import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function UseQuestions(props) {

    if( props.use == true) {
        return(
            <View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{borderWidth: 1, borderColor: '#F5F5FF', height: 14, width: 14, marginRight: 8, alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../src/img/confirm.png')}
                            resizeMode='contain'

                            style={{
                                width: 10,
                                height: 10,
                                tintColor: '#ABFF78'
                            }}
                        />
                    </View>
                    <Text style={style.linkTrue}>
                        usar questões já respondidas
                    </Text>
                </View>
            </View>
        )
    } else {
        return(
            <View>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{borderWidth: 1, borderColor: '#F5F5FF', height: 14, width: 14, marginRight: 8, alignItems: 'center', justifyContent: 'center'}}>
                        
                    </View>
                    <Text style={style.linkFalse}>
                        usar questões já respondidas
                    </Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    linkFalse: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#4B4B51'
    },
    linkTrue: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#F5F5FF'
    },
})