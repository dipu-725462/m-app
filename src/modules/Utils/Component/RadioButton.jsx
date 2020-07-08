import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
        this.renderRadioButtons = this.renderRadioButtons.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSelected = this.props.onSelected.bind(this);
    }

    handleClick(key) {
        if (key !== this.state.value) {
            this.setState({
                value: key
            })
            this.onSelected(key);
        }
    }

    renderRadioButtons(options) {
        return options.map((item) => {
            return (
                <View key={item.key} style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.circle}
                        onPress={this.handleClick.bind(null, item.key)}>
                        {this.state.value === item.key && <View style={styles.checkedCircle} />}
                    </TouchableOpacity>
                    <Text style={this.state.value === item.key ? styles.buttonTextChecked : styles.buttonText} >
                        {item.text}
                    </Text>
                </View>
            )
        })
    }

    render() {
        const { options } = this.props;
        return (
            <View style={styles.wrapper}>
                {this.renderRadioButtons(options)}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 20,
    },
    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#14bef0',
    },
    buttonText: {
        marginLeft: 15,
        marginRight: 15,
        color : "rgba(45, 45, 50,0.8)"
    },
    buttonTextChecked: {
        marginLeft: 15,
        marginRight: 15,
        color: '#14bef0'
    },
    wrapper: {

    }
});

export default RadioButton;
