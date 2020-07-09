import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import { response } from '../Constants/mock-api/mock-api';
import TagList from './TagList';
import TagSelected from './TagSelected';

class AddIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            tagsSelected: []
        }
        this.tagList = response.tagList;
    }

    renderList = ({ item, index }) => {
        return <TagList
            key={index}
            data={item.name}
            handleTagClick = {this.handleTagClick}
        />
    }

    handleChange = ({ nativeEvent }) => {
        const { text } = nativeEvent;
        this.setState({
            searchText: text
        })
    }

    updateTagList = (arr, text) => {
        return arr.filter((item, index) => {
            if (item.name.toLowerCase().startsWith(text.toLowerCase()))
                return true;
        })
    }

    handleTagClick = (tag) => {
        if (this.state.tagsSelected.includes(tag)) {
            return;
        }
        return this.addTagSelected(tag)
    }

    addTagSelected = (data) => {
        if (data && this.state.tagsSelected.length <=5) {
             this.setState({ tagsSelected: this.state.tagsSelected.concat(data) })
             return;
        }
        return Alert.alert("","Maximum 5 issues can be added")
    }

    removeTagSelected = (tag) => {
        if (this.state.tagsSelected.includes(tag)) {
            let arr = this.state.tagsSelected;
            const position = arr.indexOf(tag);
            arr.splice(position,1);
            this.setState({ tagsSelected: arr})
        }
    }

    renderSelectedTags = () => {
        const list = this.state.tagsSelected;
        if(!list){
            return;
        }
        return list.map((item,index)=> {
            return <TagSelected key={index} text={item}  removeTagSelected={this.removeTagSelected}/>
        })
    }


    render() {
        const currentSearchText = this.state.searchText;
        let listToBeRendered = !currentSearchText ? response.tagList : this.updateTagList(response.tagList, currentSearchText);
        return (
                <View style={styles.addIssues_wrapper}>
                {/** tag list */}
                
                <View style={styles.selected_tags_wrapper}>
                    {this.renderSelectedTags()}
                </View>


                <View>
                    <TextInput
                        style={styles.search_bar}
                        placeholder="e.g Stomach Ache, body pain"
                        onChange={this.handleChange}
                    />
                </View>

                {/* suggestions  */}
                <Text style={styles.suggestion_bar}>
                    Suggestions
                </Text>

                <FlatList
                    data={listToBeRendered}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    addIssues_wrapper: {
        flex: 1,
        backgroundColor : "white"
    },
    selected_tags_wrapper : {
        flexDirection : "row",
        flexWrap : "wrap"
    },
    suggestion_bar : {
        backgroundColor : "rgba(180,180,190,0.2)",
        color : "#b4b4be",
        fontSize : 16,
        fontWeight : "700",
        paddingHorizontal:10,
        paddingVertical : 15
    },
    search_bar : {
        paddingHorizontal :10,
        paddingVertical : 15,
        fontSize : 16,
    }
})

export default AddIssues;
