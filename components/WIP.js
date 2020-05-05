import React from 'react'
import {View, Image, Text} from 'react-native'

const WIP = () => <View style={{height: '100%', alignItems: 'center', justifyContent: 'center', opacity: 0.2}}>
    <Image style={{height: 68, width: 225}} source={require('../assets/images/Instagranny.png')} />
    <Text style={{color: '#010101', fontSize: 16}}>
        Ops! Essa página ainda não ficou pronta...
    </Text>
</View>

export default WIP