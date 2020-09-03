import React,{useState,useContext} from 'react'
import {View, StyleSheet, StatusBar,Image,Dimensions,Text,TouchableOpacity} from 'react-native'
import colors from '../constants/colors'
import {ConversionInput} from '../components/ConversionInput'
import { format } from 'date-fns';
import { Button } from '../components/Button';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ConversionContext } from '../util/ConversionContext';


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
        marginTop: 140
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
    textHeader: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'center',
      },
    inputContainer: {
        marginBottom: 10,
      },
      header: {
        alignItems: 'flex-end',
        marginHorizontal: 20,
      },
})

export default ({navigation})=> {
    const {
        baseCurrency,
        quoteCurrency,
        swapCurrencies,
        date,
        rates
      } = useContext(ConversionContext);
    // const [baseCurrency, setBaseCurrency] = useState('USD');
    // const [quoteCurrency, setQuoteCurrency] = useState('GBP');
    const [value, setValue] = useState('100');

    const conversionRate = rates[quoteCurrency];
    // const date = '2020-03-23';

    // const swapCurrencies = () => {
    //     setBaseCurrency(quoteCurrency);
    //     setQuoteCurrency(baseCurrency);
    // };

    return(
        <View style={style.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
            <SafeAreaView style={style.header}>
                <TouchableOpacity onPress={() => navigation.push('Options')}>
                    <Entypo name="cog" size={32} color={colors.white} />
                </TouchableOpacity>
            </SafeAreaView>


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
            
            <Text style={style.textHeader}>Currency Converter</Text>
            <View style={style.inputContainer}>
                <ConversionInput
                    text={baseCurrency}
                    value={value}
                    onButtonPress={() => navigation.push('CurrencyList', {
                        title: 'Base Currency',
                        isBaseCurrency : true
                      })}
                    keyboardType="numeric"
                    onChangeText={text => setValue(text)}
                />
                <ConversionInput
                    text={quoteCurrency}
                    value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
                    onButtonPress={() => navigation.push('CurrencyList',{ 
                        title: 'Quote Currency' ,
                        isBaseCurrency : false
                    })}
                    editable = {false}
                />
            </View>

            <Text style={style.text}>
                    {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${date && format(
                    new Date(date),
                    'MMM do, yyyy'
                    )}`}
                </Text>
            
            <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
        </View>
    )
}