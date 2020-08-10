import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

const CheckboxItem = ({type, text}) => {
    const checkbox__style = type === 'checked' ? styles.item_checked : styles.item_unChecked;
    const text__style = type === 'checked' ? styles.text_checked : styles.checkbox_item_text;
    return(
        <TouchableOpacity style = {styles.checkbox_item__wrapper}>
            <View style={styles.checkbox_item}>
                ({type} === 'checked' && <View style={checkbox__style}> </View>)
            </View>
            <Text style={text__style}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox_item__wrapper : {
        flex : 1, 
        flexDirection : "row",
        
    },
    checkbox_item : {

    },
    checkbox_item_text : {
        fontSize : 16,
        color : ""
    },
    item_checked : {

    },
    text_checked : {
        color : ""
    }
});
