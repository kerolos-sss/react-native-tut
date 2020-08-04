import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {

  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
      onPress={() => {
        props.navigation.navigate("Components");
      }}
      title="Go to components demo" />
    <Button
      onPress={() => {
        props.navigation.navigate("List");
      }}
      title="Go to List Demo" />
    <Button
      onPress={() => {
        props.navigation.navigate("Image");
      }}
      title="Go to Image Demo" />
    <Button
      onPress={() => {
        props.navigation.navigate("Counter");
      }}
      title="Go to Counter Demo" />
    <Button
      onPress={() => {
        props.navigation.navigate("Colors");
      }}
      title="Go to Colors Demo" />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
