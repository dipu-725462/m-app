import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

class Checkbox extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    renderCheckbox = ({ options }) => {
        return options.map((item, index) => {
            return (
                <TouchableOpacity style={styles.checkbox_wrapper}>
                    <View> 
                        
                    </View>
                </TouchableOpacity>
            )
        })
    }
    
    render() {
        const { options } = this.props;
        return (
            <View style = {s}>
                {this.renderCheckbox(options)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    checkbox_wrapper : {
        flex: 1,
        flexDirection: "row",
        paddingVertical: '10',
        paddingHorizontal: '10'
    },
    box_checked : {
        paddingRight : 10,
        height : 15,
        width: 15,
        backgroundColor: '#14bef0',
    },
    box_unchecked : {
        paddingRight : 10,
        height : 15,
        width: 15,
        backgroundColor: '#14bef0',
    },
    text_checked : {
        color : "#14bef0",
        fontSize : 16
    },
    text_unchecked : {
        color : "#2d2d32",
        fontSize : 16
    }
})

export default Checkbox;
