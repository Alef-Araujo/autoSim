import React from 'react';
import { Image, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default function Icon(props) {
    const slugIcon = props.slug
    switch (slugIcon) {
        case 'legislacao':
            return(
                <Image
                    source={require(`../src/img/legislacao.png`)}
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: props.design
                    }}
                />
            )
            break;
    
        case 'mecanica':
            return(
                <Image
                    source={require(`../src/img/mecanica.png`)}
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: props.design
                    }}
            />
            )
            break;
    
        case 'sos':
            return(
                <Image
                        source={require(`../src/img/sos.png`)}
                        resizeMode='contain'
                        style={{
                            width: 18,
                            height: 18,
                            tintColor: props.design
                        }}
                />
            )
            break;
    
        case 'defensive':
            return(
                <Image
                    source={require(`../src/img/defensive.png`)}
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: props.design
                    }}
                />
            )
            break;
    
        case 'global':
            return(
                <Image
                    source={require(`../src/img/global.png`)}
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: props.design
                    }}
                />
            )
            break;

        case 'user':
            return(
                <Image
                    source={require(`../src/img/user.png`)}
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        tintColor: props.design
                    }}
                />
            )
            break;


        default:
            break;
    }
}