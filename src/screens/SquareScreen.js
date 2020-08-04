import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action,) => {
    // action : { colorToChange: 'red'| 'green'| 'blue', amount: number }
    let val = 0;
    switch (action.colorToChange) {
        
        case 'red':{
            val = state.red + action.amount
            return val > 255 ? { ...state, red: 255 } : val < 0 ? { ...state, red: 0 } : { ...state, red: val };
        }
        case 'green':{
            val = state.green + action.amount;
            return val > 255 ? { ...state, green: 255 } : (val < 0 ? { ...state, green: 0 } : { ...state, green: val });
        }
        case 'blue':{
            val = state.blue + action.amount
            return val > 255 ? { ...state, blue: 255 } :( val < 0 ? { ...state, blue: 0 } : { ...state, blue: val });
        }
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;

    return <View>
        <ColorCounter
            color="Red"
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
        />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>

    </View>
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({})

export default SquareScreen;

