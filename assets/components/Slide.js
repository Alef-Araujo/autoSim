import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

import Slider from '@react-native-community/slider'

export default function SlideBar(props) {

    const [val, setVal] = useState(1)

    return(
        <View style={style.slidContent}>
            <View>
                <Text style={style.textSlider}>{props.title}</Text>
                <Slider
                    style={style.slider}
                    minimumValue={0}
                    maximumValue={10}
                    minimumTrackTintColor="#F5F5FF"
                    maximumTrackTintColor="#4B4B51"
                    thumbTintColor="#F5F5FF"
                    step={2}
                    onValueChange={(val) => {setVal(val)}}
                />
            </View>
            <Text style={style.valueBar}>{val}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    slidContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    slider: {
        width: Dimensions.get('window').width - 60,
        height: 14,
        borderWidth: 1,
    },
    textSlider: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: '#4B4B51',
        marginLeft: 14
    },
    valueBar: {
        marginTop: 14,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 10,
        color: '#F5F5FF',
        width: 14,
    }
})