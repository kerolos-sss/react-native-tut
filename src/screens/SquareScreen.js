import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const reducer = (state, action,) => {
    // action : { colorToChange: 'red'| 'green'| 'blue', amount: number }
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const {red, green, blue} = state;
    
    return <View>
        <ColorCounter
            color="Red"
            onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT})}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT})}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT})}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT})}
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

