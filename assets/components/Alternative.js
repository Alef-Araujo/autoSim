import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import Icon from '../components/Icon'

export default function Alternative(props) {

    switch (props.mark) {
        case 'enable':
            return(
                <View>
                    <View style={style.alternative}>
                        <View style={style.alt}>
                            <Text style={style.optionText}>{props.slug}</Text>
                        </View>
                        <Text style={style.altText}>{props.command}</Text>
                    </View>
                </View>
            )
            break;

        case 'disable':
            return(
                <View>
                    <View style={style.alternative}>
                        <View style={style.altDis}>
                            <Text style={style.optionTextDis}>{props.slug}</Text>
                        </View>
                        <Text style={style.altTextDis}>{props.command}</Text>
                    </View>
                </View>
            )
            break;

        case 'win':
            return(
                <View>
                    <View style={style.alternative}>
                        <View style={style.altWin}>
                            <Text style={style.optionTextWin}>{props.slug}</Text>
                        </View>
                        <View>
                            <Text style={style.altTextWin}>{props.command}</Text>
                        </View>
                    </View>
                </View>
            )
            break;

        case 'loss':
            return(
                <View>
                    <View style={style.alternative}>
                        <View style={style.altLoss}>
                            <Text style={style.optionTextLoss}>{props.slug}</Text>
                        </View>
                        <View>
                            <Text style={style.altTextLoss}>{props.command}</Text>
                        </View>
                    </View>
                </View>
            )
            break;
    
        default:
            break;
    }
}

const style = StyleSheet.create({
    alternative: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '96%',
    },  
    alt: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#EAEAFF',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    optionText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 8,
        color: '#EAEAFF'
    },
    altText: {
        flexShrink: 1,
        fontFamily: 'Nunito-Bold',
        fontSize: 13,
        color: '#EAEAFF'
    },
    altDis: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#656565',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    altTextDis: {
        flexShrink: 1,
        fontFamily: 'Nunito-Bold',
        fontSize: 13,
        color: '#656565'
    },
    optionTextDis: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 8,
        color: '#656565'
    },
    altWin: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#A4F374',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    altTextWin: {
        flexShrink: 1,
        fontFamily: 'Nunito-Bold',
        fontSize: 13,
        color: '#A4F374',
    },
    optionTextWin: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 8,
        color: '#A4F374'
    },
    altLoss: {
        width: 16,
        height: 16,
        borderWidth: 2,
        borderColor: '#F47171',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    altTextLoss: {
        flexShrink: 1,
        fontFamily: 'Nunito-Bold',
        fontSize: 13,
        color: '#F47171',
    },
    optionTextLoss: {
        fontFamily: 'Nunito-ExtraBold',
        fontSize: 8,
        color: '#F47171'
    },
})