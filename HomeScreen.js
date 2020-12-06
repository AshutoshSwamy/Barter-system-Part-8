import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, ScrollView, Modal, KeyboardAvoidingView } from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config';
import firebase, { database } from 'firebase';
import { color } from 'react-native-reanimated';
import MyHeader from '../components/MyHeader'

export default class HomeScreen extends Component {

    constructor(){

        super();
        this.state = {

            requestedObjectsList : []
        }
        this.requestRef = null
    }

    getRequestedObjectsList = () => {

      this.requestRef = db.collection(barterRequest)
      .onSnapshot((snapshot) =>{
          
        var requestedObjectsList = snapshot.docs.map(document => document.data());
        this.setState({
            requestedObjectsList : requestedObjectsList

        })
      })

    }

    componentDidMount(){
        this.getRequestedObjectsList()
    }

    componentWillUnmount(){
        this.requestRef()
    }

    keyExtractor = (item , index) => index.toString()
    
    renderItem =({item , i}) => {

        return(
            <ListItem

            key = {i}
            title = {item.object_name}
            subtitle = {item.reason_to_barter}
            titleStyle = {{ color : 'black', fontWeight : 'bold'}}
            rightElement = {
                <TouchableOpacity style = {StyleSheet.button}
                onPress = {()=>{
                  this.props.navigation.navigate({
                    
                  })
                }}
                >
                    <Text style = {{color : '#ffff'}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    render(){
        return(
          <View style={{flex:1}}>
            <MyHeader title="Sell Your Objects"/>
            <View style={{flex:1}}>
              {
                this.state.requestedBooksList.length === 0
                ?(
                  <View style={styles.subContainer}>
                    <Text style={{ fontSize: 20}}>List Of All Requested Objects</Text>
                  </View>
                )
                :(
                  <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.requestedObjectsList}
                    renderItem={this.renderItem}
                  />
                )
              }
            </View>
          </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      subContainer:{
        flex:1,
        fontSize: 20,
        justifyContent:'center',
        alignItems:'center'
      },
      button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
         }
      }
    })
