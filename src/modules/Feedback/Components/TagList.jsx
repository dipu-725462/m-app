import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TagList = ({ data, handleTagClick }) => {

    const handleClick = () => {
        handleTagClick(data);
    }

    return (
        <Text style={styles.list_wrapper} onPress={handleClick}>
            {data}
        </Text>
    )
}

const styles = StyleSheet.create({
    list_wrapper: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#e8e8f0",
        marginHorizontal: 10,
        fontSize: 18,
        color: "#2d2d32",
    }
});

export default TagList;
