import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';

import Alternative from '../../components/Alternative';
import Confirm from '../../components/Confirm';

export default function Questions(props) {

    const [activeA, setActiveA] = useState('disable')
    const [activeB, setActiveB] = useState('disable')
    const [activeC, setActiveC] = useState('disable')
    const [activeD, setActiveD] = useState('disable')
    const [activeE, setActiveE] = useState('disable')

    const [marked, setMarked] = useState(0)
    const [situation, setSituation] = useState('answer')
    

    function markA() {
        if(situation === 'answer'){
            if(activeA == 'disable') {
                setMarked(1)
                setActiveA('enable')
                setActiveB('disable')
                setActiveC('disable')
                setActiveD('disable')
                setActiveE('disable')
            } 
        }
    }

    function markB() {
        if(situation === 'answer'){
            if(activeB == 'disable') {
                setMarked(2)
                setActiveB('enable')
                setActiveA('disable')
                setActiveC('disable')
                setActiveD('disable')
                setActiveE('disable')
            }
        }
    }

    function markC() {
        if(situation === 'answer'){
            if(activeC == 'disable') {
                setMarked(3)
                setActiveC('enable')
                setActiveB('disable')
                setActiveA('disable')
                setActiveD('disable')
                setActiveE('disable')
            }
        }
    }

    function markD() {
        if(situation === 'answer'){
            if(activeD == 'disable') {
                setMarked(4)
                setActiveD('enable')
                setActiveB('disable')
                setActiveC('disable')
                setActiveA('disable')
                setActiveE('disable')
            }
        }
    }

    function markE() {
        if(situation === 'answer'){
            if(activeE == 'disable') {
                setMarked(5)
                setActiveE('enable') 
                setActiveB('disable')
                setActiveC('disable')
                setActiveA('disable')
                setActiveD('disable')
            }
        }
    }

    function confirm(marked) {
        if(situation === 'answer') {
            if(marked !== 0) {
                props.nextPosition()
                switch (props.currentQuestion.win) {
                    case 1:
                        setActiveA('win')
                        break;
                
                    case 2:
                        setActiveB('win')
                        break;
                
                    case 3:
                        setActiveC('win')
                        break;
                
                    case 4:
                        setActiveD('win')
                        break;
                
                    case 5:
                        setActiveE('win')
                        break;
                
                    default:
                        break;
                }

                if(marked !== props.currentQuestion.win) {
                    setSituation('loss')
                    switch (marked) {
                        case 1:
                            setActiveA('loss')
                            break;
                    
                        case 2:
                            setActiveB('loss')
                            break;
                    
                        case 3:
                            setActiveC('loss')
                            break;
                    
                        case 4:
                            setActiveD('loss')
                            break;
                    
                        case 5:
                            setActiveE('loss')
                            break;
                    
                        default:
                            break;
                    }
                } else {
                    setSituation('win')
                }
            }
        } else {
            setSituation('answer')
        }
    }
    
    return(
        <View style={{paddingLeft: 6, marginBottom: 16}}>
            <View>
                <View style={style.containAlt}>  
                    <TouchableOpacity
                        onPress={() => {markA()}}
                    >
                        <View>
                            <Alternative command={props.currentQuestion.alternative[0]} slug={'A'} win={props.currentQuestion.win} value={1} mark={activeA}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.containAlt}>
                    <TouchableOpacity
                        onPress={() => {markB()}}
                    >
                        <View>
                            <Alternative command={props.currentQuestion.alternative[1]} mark={activeB} slug={'B'} win={props.currentQuestion.win} value={2}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.containAlt}>
                    <TouchableOpacity
                        onPress={() => {markC()}}
                    >
                        <View>
                            <Alternative command={props.currentQuestion.alternative[2]} mark={activeC} slug={'C'} win={props.currentQuestion.win} value={3}/>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={style.containAlt}>
                    <TouchableOpacity
                        onPress={() => {markD()}}
                    >
                        <View>
                            <Alternative command={props.currentQuestion.alternative[3]} mark={activeD} slug={'D'} win={props.currentQuestion.win} value={4}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.containAlt}>
                    <TouchableOpacity
                        onPress={() => {markE()}}
                    >
                        <View>
                            <Alternative command={props.currentQuestion.alternative[4]} mark={activeE} slug={'D'} win={props.currentQuestion.win} value={5}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.containConfrim}>
                <TouchableOpacity
                style={style.confirm}
                    onPress={() => {confirm(marked)}}
                >
                    <Confirm situation={situation} />
                </TouchableOpacity>
            </View>
            <Text>{situation}</Text>
        </View>
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
        height: 40,
        alignItems: 'flex-end',
    },
    confirm: {
        height: 40,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})