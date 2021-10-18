import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text } from "react-native";
import { Heading, Image } from "native-base";

import {MaterialIcons} from "@expo/vector-icons";

const Home =({navigation})=>{
    return(
     
        <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#dcdcdc'}}>
          
            <View >
                <Text style={{fontSize: 20, fontWeight: 'normal', color: '#20315f'}}>Bienvenido a </Text>
                <Text style={{fontSize: 30, fontWeight:'bold', color: '#20315f'}}>PET<Text style={{color:'#4682b4', textDecorationStyle:'dashed'}}>HEALTHY</Text></Text>
            </View>
            <Image
                size={350}
                resizeMode={"contain"}
                borderRadius={100}
                source={require('../images/1.png')}
                alt="Alternate Text"
    />
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                style={{backgroundColor: '#4682b4', 
                padding:20, 
                width:'90%', 
                borderRadius:100,
                flexDirection:'row', 
                justifyContent: 'space-between'}}
                >
                <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>Iniciar</Text>
                <MaterialIcons name="play-circle-filled" size={22} color="#fff"/>
            </TouchableOpacity>
     
        </SafeAreaView>
    )
}

export default Home;
