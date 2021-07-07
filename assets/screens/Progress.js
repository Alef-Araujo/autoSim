import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, ScrollView } from 'react-native';

import CardProgress from '../components/CardProgress'

export default function TabProgress() {
    return(
        <SafeAreaView style={style.back}>
            <View style={style.header}>
                <Text style={style.textHeader}>Seu desempenho</Text>
                <Image
                    source={require('../src/img/clean.png')}
                    resizeMode='contain'
                    style={{
                        width: 15,
                        height: 15,
                    }}
                />
            </View>
            <ScrollView style={style.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={style.containCard}>
                    <CardProgress theme={'Legislação'} slug={'legislacao'} totalQuest={654} resQuest={327} winQuest={287} lossQuest={40} />    
                </View>
                <View style={style.containCard}>
                    <CardProgress theme={'Mecânica Básica'} slug={'mecanica'} totalQuest={580} resQuest={420} winQuest={340} lossQuest={80} />    
                </View>
                <View style={style.containCard}>
                    <CardProgress theme={'Primeiros Socorros'} slug={'sos'} totalQuest={400} resQuest={320} winQuest={230} lossQuest={90} />    
                </View>
                <View style={style.containCard}>
                    <CardProgress theme={'Direção Defensiva'} slug={'defensive'} totalQuest={260} resQuest={240} winQuest={160} lossQuest={80} />    
                </View>
                <View style={style.containCard}>
                    <CardProgress theme={'Meio Amiente'} slug={'global'} totalQuest={120} resQuest={90} winQuest={50} lossQuest={40} />    
                </View>
            </ScrollView>
             
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
    container: {
        paddingVertical: 15,
        paddingHorizontal: 16,
        marginTop: 20,
        marginBottom: 10
    },
    containCard: {
        marginBottom: 48
    }
})