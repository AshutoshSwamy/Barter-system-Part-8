import React, {Component} from 'react';
import {Stylesheet, Text, TouchableOpacity, View} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends Component{

    render(){
        return(

            <View style = {{flex:1}}>
                <View style={Stylesheet.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>

                </View>
                <View>
                    <TouchableOpacity
                    onPress = {() => {
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}
                    >
                        <Text>Log Out</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = Stylesheet.create({

    container : {
        flex :1,
        justifyConteny : "center"
    },

    drawerItemsContainer :{

    },
})