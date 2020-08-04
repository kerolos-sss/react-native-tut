import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'


const BoxScreen = () => {
    const [password, setPassword] = useState("")

    return <View style={styles.viewStyle}>
        <Text style={styles.textOne}>Child #1</Text>
        <Text style={styles.textTwo}>Child    #2</Text>
        <Text style={styles.textThree}>Child       #3</Text>
    </View>

};

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        // alignItems: "flex-start",
        // flexDirection: "row",
        height: 200,
        // justifyContent: "space-around"
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
    },
    textOne:{
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        flex:0.4
    },
    textTwo:{
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        alignSelf: "center",
        flex: 1
    },
    textThree:{
        borderWidth: 3,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        flex: 0.9
    }

});

export default BoxScreen;
