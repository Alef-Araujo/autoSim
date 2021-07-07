import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';

import Questions from '../stackHome/Questions';
import Alternative from '../../components/Alternative';

import { legislacao } from '../../database/legislacao';
import { defensiva } from '../../database/defensiva';
import { socorro } from '../../database/socorro';
import { mecanica } from '../../database/mecanica';
import { ambiente } from '../../database/ambiente';

export default function Simulated() {
    const questions = {
        legislacao: [1, 2, 3, 4, 5],
        defensiva: [1, 3],
        questsocorro: [1, 2, 4, 5],
        mecanica: [1, 2, 5, 3, 4],
        ambiente: [1, 2, 5, 4],
    }
    const totalQuestion = 30
    const [progress, setProgress] = useState(1)
    const [currentTheme, setCurrentTheme] = useState(legislacao)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(currentTheme[questions.legislacao[currentPosition]])

    function nextPosition() {
        setCurrentPosition(currentPosition + 1)
    }

    function next() {
        setCurrentQuestion(currentTheme[questions.legislacao[currentPosition]])
    }

    return(
        <SafeAreaView style={style.back}>
            <View style={style.header}>
                <Text style={style.primaryText}>{currentTheme[0]}</Text>
                <Image 
                    source={require('../../src/img/close.png')}
                    resizeMode='contain'
                    style={{
                        width: 16,
                        height: 16
                    }}
                />
            </View>
            <View>
                <View style={style.label}>
                    <Text style={style.labelText}>{progress} de {totalQuestion}</Text>
                </View>
                <View style={style.question}>
                    <Text style={style.primaryText}>{currentQuestion.command}</Text>
                </View>
                <View style={style.bar}></View>

                <Questions currentQuestion={currentQuestion} next={next} nextPosition={nextPosition} />
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
        paddingTop: 18,
        paddingHorizontal: 22
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 48
    },
    primaryText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#EAEAFF'
    },
    label: {
        alignItems: 'center',
        marginBottom: 22
    },
    labelText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 14,
        color: '#EAEAFF'
    },
    question: {
        marginBottom: 14
    },
    bar: {
        width: '100%',
        height: 1,
        backgroundColor: '#4B4B51',
        marginBottom: 14
    },
    containAlt: {
        marginBottom: 16,
        borderRightWidth: 2,
        borderRightColor: '#1F1F2F',
    },
    alternative: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 14
    },  
    alt: {
        width: 16,
        height: 16,
        borderWidth: 1,
        borderColor: '#4B4B51',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    altText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 12,
        color: '#EAEAFF',
    },
    containConfrim: {
        paddingRight: 18,
        alignItems: 'flex-end'
    }
})