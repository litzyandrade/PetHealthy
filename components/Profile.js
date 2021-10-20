import React, { useState } from 'react';
import { ScrollView, Card, Text, Image, Input, Button , Icon} from 'native-base';
import {View} from 'react-native';
import { Ionicons } from "@expo/vector-icons"
const Profile =()=>{


    return (
        <ScrollView>
            <Card>
                    <Image
                        size={150}
                        resizeMode={"contain"}
                        borderRadius={100}
                        justifyContent= "center"
                        alignItems= "center"
                        alignSelf="center"
                            source={{
                                uri: "https://lh3.googleusercontent.com/proxy/_I_XeemDiK_GvHCsbi0amDi6fHANFw3_eAo59XR10gczsJPSZQ0Qw_X-RAAL39m56--YtUwJnMylSQODRvgIMkltZJkzpHZiEnAq3LXr1EdfC50",
                            }}
                            alt="Alternate Text"
                    />
    <View style={{marginTop: 10}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#4682b4'}}>MIS DATOS</Text>
    </View>
    
    <View style={{marginBottom: 10, marginTop: 10}}>
        <Input variant="underlined" 
                placeholder="Nombre Completo" 
                style={{width: '100%',fontSize: 15, textAlign: 'left'}}
                InputLeftElement={
                    <Icon
                    as={<Ionicons name="person" />}
                    size={7}
                    ml="2"
                    color="primary.600"
                    />
                } />
    </View>
        <View style={{marginTop: 10, marginBottom:10}}>
            <Input variant="underlined" 
            placeholder="Telefono" style={{width: '100%',fontSize: 15, textAlign: 'left'}}
            InputLeftElement={
                <Icon
                as={<Ionicons name="call" />}
                size={7}
                ml="2"
                color="primary.600"
                />
            } />
        </View>
        <View  style={{marginTop: 10, marginBottom:10}}>
        <Input variant="underlined" 
        placeholder="ejemplo@gmail.com" 
        style={{width: '100%',fontSize: 15, textAlign: 'left'}}
        InputLeftElement={
            <Icon
              as={<Ionicons name="mail" />}
              size={7}
              ml="2"
              color="primary.600"
            />
          }/>
          </View>
          <View  style={{marginTop: 10, marginBottom:15}}>
        <Input variant="underlined" placeholder="Domicilio" style={{width: '100%',fontSize: 15, textAlign: 'left'}}
        InputLeftElement={
            <Icon
              as={<Ionicons name="md-navigate" />}
              size={7}
              ml="2"
              color="primary.600"
            />
          }/>
    </View>
    <View style={{marginBottom: 10}}>
    <Button
        leftIcon={<Icon as={Ionicons} name="save" size="sm" />}
        style={{backgroundColor: 'black'}}
      >
       GUARDAR CAMBIOS
      </Button>
    </View>
    <View style={{marginTop: 145}}>
    <Button
            size="lg"
            variant="ghost" 
            style={{width: "60%"}}
          >
              <Text style={{fontSize: 18}}>
              <Icon as={Ionicons} name="exit" size="sm" />¿Cerrar Sesion?</Text>
          </Button>
    </View>
            </Card>
        </ScrollView>
    )
}
export default Profile;