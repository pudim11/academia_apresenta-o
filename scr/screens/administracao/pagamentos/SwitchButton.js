import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import styles from "../../../../style";

const SwitchButton = (props) => {
    return(
        <Pressable
            onPress={props.OnPressFunctionTop}
        >
          <View style={switchStyle.viewSwitch}>
            <Text style={[styles.text, switchStyle.textSwitch]}>----</Text>
          </View>
        </Pressable>
    )
}

const switchStyle = StyleSheet.create({
    viewSwitch: {
        alignSelf: 'flex-end', 
        position: 'absolute',
        bottom: -650,
        right: 10,
        flex:1
    },
    textSwitch: {
        backgroundColor:'green', 
        borderRadius:20, 
        padding:10
    }
})

export default SwitchButton;