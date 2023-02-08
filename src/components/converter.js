import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert } from 'react-native';
import axios from 'axios';

 class Converter extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            tl: '',
            usd: '',
            cad: '',
            jpy: '',
            eur: '',
            input: '',
            rates: []
        }
        debugger;
        console.log("constructor");

        this.getRates = this.getRates.bind(this);
    }

    getRates(){
        axios.get("https://api.apilayer.com/fixer/latest?apikey=0raTBQZtT4KQeU1GPOD5fvoihk0hPgtJ&symbols=EUR,TRY,USD,CAD,JPY")
        .then(response => {
            console.log(response);
            const rates = response.data.rates;
            this.setState({
                rates
            });
        })
        debugger;
    }

    componentDidMount(){
       this.getRates();
    }


    render() {
    const { converterWrapper, inputStyle, textStyle} = styles;
    const { input, tl, usd, cad, jpy, eur, rates } = this.state;

    return (
        <View style={converterWrapper}>
            <TextInput placeholder='Enter EUR Value'
                style={inputStyle} 
                keyboardType='numeric'
                onChangeText={(text) => {
                    const i = parseFloat(text) || 0;
                    this.setState({
                        input: text,
                        tl: (i * rates['TRY']).toFixed(2),
                        usd: (i * rates['USD']).toFixed(2),
                        cad: (i * rates['CAD']).toFixed(2),
                        jpy: (i * rates['JPY']).toFixed(2),
                        eur: (i * rates['EUR']).toFixed(2)
                    })
                }} 
                value={input} ></TextInput>
            <Text style={textStyle}>TRY : {tl}</Text>
            <Text style={textStyle}>USD : {usd}</Text>
            <Text style={textStyle}>CAD : {cad}</Text>
            <Text style={textStyle}>JPY : {jpy}</Text>
            <Text style={textStyle}>EUR : {eur}</Text>

        </View>
    )}
}

const styles = StyleSheet.create({
    converterWrapper: {
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    inputStyle: {
        width: 200,
        height: 40,
        marginBottom: 25
    },
    textStyle: {
        width: 170,
        height: 50,
        fontWeight: 'bold'
    }
})

export default Converter;