import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

import Card from '../../components/CardTheme';

export default function Home(props) {
    return(
        <SafeAreaView style = {style.back}>
            <View style = {style.topBar}>
                <TouchableHighlight
                    style = {style.card}
                    activeOpacity = {1}
                    underlayColor = '#CFCFDF'
                    onPress = {() => {props.toSimGeneral()}}
                >
                    <View  style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../../src/img/simuladoGeral.png')}
                            resizeMode='contain'
                            style={{
                                width: 18,
                                height: 18,
                            }}
                        />
                        <Text style={style.cardText}>Simulado Geral</Text>
                    </View>
                </TouchableHighlight>
            </View>

            <ScrollView style={style.container}
                showsVerticalScrollIndicator={false}
            >
                <Card theme={'Legislação'} slug={'legislacao'} slides={65} questions={654} />
                <Card theme={'Mecânica Básica'} slug={'mecanica'} slides={32} questions={465} />
                <Card theme={'Primeiros Socorros'} slug={'sos'} slides={23} questions={234} />
                <Card theme={'Direção Defensiva'} slug={'defensive'} slides={21} questions={189} />
                <Card theme={'Meio Amiente'} slug={'global'} slides={18} questions={156} />
            </ScrollView>
        </SafeAreaView>
    )
}



const style = StyleSheet.create({
    back: {
        backgroundColor: '#40405B',
        width: '100%',
        height: '100%',
        borderWidth: 0,
        paddingHorizontal: 12,
    },
    topBar: {
        width: '100%',
        marginTop: 14,
        marginBottom: 16
    },
    card: {
        height: 58,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
        backgroundColor: '#F5F5FF',
    },
    cardText: {
        marginLeft: 16,
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#40405B',
    },
    container: {
        paddingVertical: 15,
        marginBottom: 10,
    }
})