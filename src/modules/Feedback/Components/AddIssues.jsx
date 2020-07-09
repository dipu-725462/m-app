import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import { response } from '../Constants/mock-api/mock-api';
import TagList from './TagList';

class AddIssues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText : ''
        }
        this.tagList = response.tagList;
        // this.renderList = this.renderList.bind(this);
    }
    
    renderList = ({item,index}) =>{
        return <TagList key={index} data={item.name} />
    }

   

    handleChage = ({nativeEvent}) => {
        const {text} = nativeEvent;
        this.setState({
            searchText : text
        })
    }  
      
    updateTagList = (arr,text) => {
        return arr.filter((item,index)=> {
            if(item.name.startsWith(text))
                return true;
        })
    }

    render() {
        const currentSearchText = this.state.searchText;
        let listToBeRendered = !currentSearchText ? response.tagList : this.updateTagList(response.tagList,currentSearchText);

        return(
            <View style={styles.addIssues_wrapper}>
                {/* tag list */}
                <View>
                    {/* {this.renderSelectedItems} */}
                </View>
                
                {/* search bar  */}
                <View>
                    <TextInput
                        placeholder="e.g Stomach Ache, body pain"
                        onChange ={this.handleChage} 
                    />
                </View>

                {/* suggestions  */}
                <Text>
                   Suggestions
                </Text>

                <FlatList 
                    data = {listToBeRendered}
                    renderItem={this.renderList}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addIssues_wrapper : {
        flex: 1
    }
})

export default AddIssues;