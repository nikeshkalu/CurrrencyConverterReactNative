import React from 'react'
import {View, StyleSheet, StatusBar,Image,Dimensions} from 'react-native'
import colors from '../constants/colors'

const screen = Dimensions.get('window')

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.blue,
        justifyContent : "flex-start"
      },
    logoContainer : {
        alignItems : "center",
        justifyContent : "center",
        marginTop: 125
        
    },
    logoBackground : {
        width : screen.width * 0.45,
        height : screen.width * 0.45
    },
    logo : {
        position : "absolute",
        width : screen.width * 0.25,
        height : screen.width * 0.25

    },
})

export default ()=> {
    return(
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
            <View style={style.logoContainer}>
            <Image 
                source={require("../assets/images/background.png")}
                style={style.logoBackground} 
                resizeMode="contain"/>
            <Image 
                source={require('../assets/images/logo.png')} 
                style={style.logo}
                resizeMode="contain"/>
            </View>
        </View>
    )
}