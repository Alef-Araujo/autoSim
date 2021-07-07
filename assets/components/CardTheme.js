import React from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

import Icon from '../components/Icon'

export default function TabHome(props) {
    return(
        <View style={style.card}>
            <View style={style.cardHeader}>
                <Icon slug={props.slug} design={'#55557F'} />
                <Text style={style.textHeader}>{props.theme}</Text>
            </View>
            <View style={style.mainCard}>
                <View style={style.infoCard}>
                    <Text style={style.valueInfoCard}>{props.slides}</Text>
                    <Text style={style.textInfoCard}>slides</Text>
                </View>
                <View style={style.infoCard}>
                    <Text style={style.valueInfoCard}>{props.questions}</Text>
                    <Text style={style.textInfoCard}>questões</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    card: {
        height: 112,
        paddingTop: 8,
        paddingLeft: 16,
        paddingBottom: 40,
        marginBottom: 20,
        backgroundColor: '#F5F5FF',
        borderRadius: 5,
    },
    cardHeader: {
        flex: 1,
        flexDirection: 'row'
    },
    textHeader: {
        fontFamily: 'Nunito-Bold',
        fontSize: 16,
        color: '#55557F',
        marginLeft: 12
    },
    mainCard: {
        flex: 1
    },
    infoCard: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 14,
    },
    valueInfoCard: {
        fontFamily: 'Nunito-Black',
        fontSize: 14,
        color: '#3467D0'
    },
    textInfoCard: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: '#656565',
        marginLeft: 5
    }
})