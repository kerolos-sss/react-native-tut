import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'


const BoxScreen = () => {
    const [password, setPassword] = useState("")

    return <View style={styles.parent}>
        <View style={styles.viewOne}></View>
        <View style={styles.viewTwo}></View>
        <View style={styles.viewThree}></View>
    </View>

};

const styles = StyleSheet.create({
    parent: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOne: {
        height: 50,
        width: 50,
        backgroundColor: "red",
        
    },
    viewTwo: {
        height: 50,
        width: 50,
        backgroundColor: "green",
        marginTop: 50
    },
    viewThree: {
        height: 50,
        width: 50,
        backgroundColor: "purple",
    },
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        // alignItems: "flex-start",
        // flexDirection: "row",
        height: 200,
        // justifyContent: "space-around"
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
    },
    textOne: {
        borderWidth: 3,
        borderColor: 'white',
        // marginVertical: 20,
        // marginHorizontal: 20,
    },
    textTwo: {
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,

        ...StyleSheet.absoluteFillObject,
    },
    textThree: {
        borderWidth: 3,
        borderColor: 'white',
        // marginVertical: 20,
        // marginHorizontal: 20,
    }

});

export default BoxScreen;
