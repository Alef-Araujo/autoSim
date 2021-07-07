import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView} from 'react-native';

import ProgressBar from '../components/ProgressBar'
import Icon from '../components/Icon'

export default function CardProgress(props) {
    return(
        <View style={style.card}>
            <View style={style.legendCard}>
                <Icon slug={props.slug} design={'#EAEAFF'} />
                <Text style={style.textLegend}>{props.theme}</Text>
            </View>
            <View style={style.main}>
                        <ProgressBar color1={'#0988FD'} color2={'#1F2989'} totalQuest={props.totalQuest} progQuest={props.resQuest} />
                        <ProgressBar color1={'#85F42E'} color2={'#1D9D31'} totalQuest={props.resQuest} progQuest={props.winQuest} />
                        <ProgressBar color1={'#F57474'} color2={'#AC0707'} totalQuest={props.resQuest} progQuest={props.lossQuest}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        borderRightWidth: 2,
        borderRightColor: '#EAEAFF',
        paddingRight: 8,
    },
    legendCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    textLegend: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#EAEAFF'
    },
    main: {
        display: 'flex',
        alignItems: 'center'
    }
})