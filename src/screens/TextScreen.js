import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'


const TextScreen = () => {
    const [password, setPassword] = useState("")

    return <View>
        <Text>Enter Name</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        {/* <Text>
            My Name is {password}
        </Text> */}
        {
            password.length < 4 ?
                <Text>
                    Password length must be more than 4 characters 
                </Text> :
                null
        }
    </View>

};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
