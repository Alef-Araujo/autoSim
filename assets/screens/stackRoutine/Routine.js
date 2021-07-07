import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableHighlight, Image } from 'react-native';

export default function TabRoutine(props) {
    return(
        <SafeAreaView style={style.back}>
            <View style={style.header}>
                <Text style={style.textHeader}>Agenda</Text>
                <Image
                    source={require('../../src/img/info.png')}
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 20,
                    }}
                />
            </View>
            <View style={style.main}>
                <Text style={style.textEvent}>Próximo evento</Text>
                <View style={style.timer}>
                    <Text style={style.minHourTimer}>00:00</Text>
                    <Text style={style.secondTimer}>00s</Text>
                </View>
                <Text style={style.textLegend}>Transforme seu estudo em uma rotina !</Text>
                <TouchableHighlight style={style.add}>
                    <Image 
                        source={require('../../src/img/add.png')}
                        resizeMode='contain'
                        style={{
                            width: 18,
                            height: 18
                        }}
                    />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    back: {
        backgroundColor: '#1F1F2F',
        width: '100%',
        height: '100%',
        borderWidth: 0,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        backgroundColor: '#40405B',
        paddingHorizontal: 12,
    },
    textHeader: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#EAEAFF'
    },
    main: {
        flex: 1,
        alignItems: 'center',

        paddingTop: 20
    },
    textEvent: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#656565',
        textDecorationLine: 'line-through',
        marginBottom: 24

    },
    timer: {
        width: 250,
        height: 250,
        borderWidth: 2,
        borderColor: '#656565',
        borderRadius: 250,

        display: 'flex',
        alignItems: 'center',
        paddingTop: '20%',
        marginBottom: 60
    },
    minHourTimer: {
        fontFamily: 'Nunito-Bold',
        fontSize: 72,
        color: '#656565',
        marginBottom: 16
    },
    secondTimer: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#656565',
    },
    textLegend: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        color: '#656565',
        marginBottom: 40 
    },
    add: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: '#EAEAFF',
        borderRadius: 100,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
})