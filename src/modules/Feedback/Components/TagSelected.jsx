import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TagSelected = ({ text ,removeTagSelected  }) => {
    
    const handleIconClick = () => {
        removeTagSelected(text);
    }
    
    return (
            <Text style={styles.text_wrapper}>
                {text}
                <Text style={styles.cancel_icon} onPress={handleIconClick}>{"                x  "}</Text>
            </Text>
    )
}

const styles = StyleSheet.create({
    text_wrapper: {
        backgroundColor: "#e8e8f0",
        marginHorizontal: 10,
        marginTop: 10,
        padding: 10,
        fontSize : 16 
    },
    cancel_icon : {
        fontWeight: "900",
        fontSize : 14,
        margin : 30,
        width : 20,
    }
});

export default TagSelected;