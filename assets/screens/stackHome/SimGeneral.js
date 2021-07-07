import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

import CardProgress from '../../components/CardProgress';
import Slider from '../../components/Slide';
import UseQuestions from '../../components/UseQuestions';


export default function SimGeneral(props) {
    const totalClasses = 356;
    const progClasses = 52;
    const progress = Math.trunc((progClasses / totalClasses) * 100);

    const [useQuestion, setUseQuestion] = useState(true)

    function beforeQuant() {
        if(props.valQuest > 5) {
            props.setValQuest(props.valQuest - 1)
        }
        return
    }

    function nextQuant() {
        if(props.valQuest < 30) {
            props.setValQuest(props.valQuest + 1)
        }
        return
    }


    return(
        <SafeAreaView style={style.back}>
            <View style={style.division}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <View style={style.bar}></View>
                </View>
                <Text style={style.divisionText}>estátisticas</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <View style={style.bar}></View>
                </View>
            </View>

            <View style={{paddingHorizontal: 18,}} >
                <CardProgress theme={'Alef'} slug={'user'} totalQuest={1345} resQuest={1100} winQuest={850} lossQuest={250} />
            </View>

            <View style={style.division}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <View style={style.bar}></View>
                </View>
                <Text style={style.divisionClasses}>aulas</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <View style={style.bar}></View>
                </View>
            </View>

            <View>
                <View style={style.classes}>
                    <View style={{paddingRight: 22}}>
                        <View style={style.barValue}></View>
                        <Text style={style.textValue}>112</Text>
                        <View style={style.barValue}></View>
                        <Text style={style.legendValue}>slides</Text>
                    </View>
                    <View style={{marginRight: 8, marginBottom: 6}}>
                        <Text style={style.legendBar}>concluído</Text>
                            <View style={style.progressBar}>
                                <View style={style.baseBar}>
                                    <View 
                                        style={{
                                            width: `${progress}%`,
                                            height: '100%',
                                            backgroundColor: '#F5F5FF'
                                        }}>
                                    </View>
                                </View>
                                <Text style={style.legendValue}>{progress}%</Text>
                            </View>
                    </View>
                    
                </View>
                <View style={{alignItems: 'flex-end', paddingRight: 14}}>
                    <Text style={style.link}>estudar {'>'}</Text>
                </View>
            </View>
            
            <View style={style.division}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <View style={style.bar}></View>
                </View>
                <Text style={style.divisionSim}>simulado</Text>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}>
                    <View style={style.bar}></View>
                </View>
            </View>

            <View>
                <View>
                    <View style={style.legendSim}>
                        <Text style={style.textLegend}>questões</Text>
                    </View>
                    <View style={style.simulated}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{width: 2, height: 140, backgroundColor: '#4B4B51', marginRight: 4}}></View>
                            <View style={{marginRight: 8, marginBottom: 4}}>
                                <Slider title={'legislação'} />
                                <Slider title={'primeiros socorros'} />
                                <Slider title={'direção defensiva'} />
                                <Slider title={'mecãnica básica'} />
                                <Slider title={'meio ambiente / cidadania'} />
                            </View>
                        </View>
                    </View>
                    <View style={style.containLink}>
                        <TouchableWithoutFeedback
                            onPress={() => {setUseQuestion(!useQuestion)}}
                        >
                            <View>
                                <UseQuestions use={useQuestion} />
                            </View>
                        </TouchableWithoutFeedback>
                        <View>
                            <TouchableOpacity
                                onPress = {() => {props.toSimulated()}}
                            >
                                <Text style={style.link}>praticar {'>'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    <View>
                        
                    </View>
                </View>
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
        paddingTop: 6
    },
    division: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divisionText: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        color: '#656565',
        alignItems: 'center',
        marginBottom: 2,
        marginHorizontal: 12
    },
    divisionClasses: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        color: '#656565',
        alignItems: 'center',
        marginBottom: 2,
        marginHorizontal: 34
    },
    divisionSim: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 18,
        color: '#656565',
        alignItems: 'center',
        marginBottom: 2,
        marginHorizontal: 22
    },
    bar: {
        height: 1,
        width: '56%',
        backgroundColor: '#4B4B51',
    },
    classes: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 22,
        marginTop: 2
    },
    barValue: {
        width: 40,
        height: 2,
        backgroundColor: '#4B4B51'
    },
    textValue: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#F5F5FF',
        textAlign: 'center',
        marginVertical: 4,
    },
    textQuestion: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: '#F5F5FF',
        textAlign: 'center',
        marginVertical: 4,
        marginHorizontal: 22
    },
    legendValue: {
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold',
        fontSize: 10,
        color: '#F5F5FF',
        marginLeft: 8
    },
    progressBar: {
        width: 210,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    controlBar: {
        width: 160,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    valueBar: {
        fontFamily: 'Nunito-Bold',
        fontSize: 8,
        color: '#EAEAFF',
    },
    baseBar: {
        width: '100%',
        height: 2
,       backgroundColor: '#656565',
        borderRadius: 100,
        marginBottom: 2
    },
    legendBar: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#656565'
    },
    containLink: {
        paddingHorizontal: 16,
        alignItems: 'flex-end',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    link: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: '#F5F5FF'
    },
    simulated: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginBottom: 16,
    },
    legendSim: {
        alignItems: 'flex-end',
        paddingRight: 28,
    },
    textLegend: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: '#656565'
    }
})