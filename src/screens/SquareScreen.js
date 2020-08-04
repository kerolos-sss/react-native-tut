import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)


    return <View>
        <ColorCounter
            color="Red"
            onIncrease={() => setRed(red + COLOR_INCREMENT)}
            onDecrease={() => setRed(red - COLOR_INCREMENT)}
        />
        <ColorCounter
            color="Green"
            onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        />
        <ColorCounter
            color="Blue"
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        />
        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        <Text>{`rgb(${red}, ${green}, ${blue})` }</Text>

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

