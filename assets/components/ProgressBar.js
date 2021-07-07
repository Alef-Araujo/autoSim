import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function ProgressBar(props) {

    const totalQuest = props.totalQuest;
    const progQuest = props.progQuest;

    const progress = (progQuest / totalQuest) * 100;


    return(
        <View style={style.progressBar}>
            <View style={style.fixed}>
                <Text style={style.legendBar}>resolvidas</Text>
                <Text style={style.valueBar}>{totalQuest}</Text>
            </View>
            <View style={style.baseBar}>
            <View style={{
                width: `${progress}%`,
                height: '100%',}}>
                <LinearGradient start = { { x : 0 ,  y : 0 } }  end = { { x : 1 ,  y : 0 } } colors={[props.color1, props.color2]}>
                        <Text></Text>
                </LinearGradient>
            </View>
            </View>
            <View  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    width: `${progress}%`,
            }}>
                <Text style={style.valueBar}>{progQuest}</Text>
            </View>     
        </View>
    )
}

const style = StyleSheet.create({
    progressBar: {
        width: '100%',
    },
    fixed: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10
    },
    legendBar: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#EAEAFF'
    },
    valueBar: {
        fontFamily: 'Nunito-Bold',
        fontSize: 8,
        color: '#EAEAFF',
    },
    baseBar: {
        width: '100%',
        height: 5,
        backgroundColor: '#656565',
        borderRadius: 100,
        marginBottom: 2
    },
    point: {
        width: 3,
        height: 3,
        backgroundColor: '#EAEAFF',
        borderRadius: 3
    },
})