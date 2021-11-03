import React, { useState ,useEffect} from 'react';
import { ScrollView, Card, Text, Image, Input, Button , Icon, Modal, Hidden} from 'native-base';
import { View, TouchableOpacity, Alert} from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import axios, {Axios} from 'axios';
import {MaterialIcons} from "@expo/vector-icons";
const Profile =({route, navigation})=>{

    
    const {data} = route.params;
    const uid = data.map((u)=> u.IdPropietario)
    const nombre = data.map((u)=> u.Nombre)
    const domi = data.map((u)=> u.Domicilio)
    const telefono = data.map((u)=> u.Telefono)
    const pass = data.map((u)=> u.Password)
    const correo = data.map((u)=> u.User)
   
    const [showModal, setShowModal] = useState(false)
    
    const [value,setValue] = useState({
        id: uid,
        name: nombre,
        address: domi,
        phone: telefono,
        email: correo,
        password: pass
    })

    
    const updateData =async ()=> {
        
        const formData = new FormData();
        
        formData.append('id', value.id)
        formData.append('name', value.name)
        formData.append('address', value.address)
        formData.append('phone', value.phone)
        formData.append('email', value.email)
        formData.append('password', value.password)
       
        const response = await axios.put
        (
        'http://192.168.100.7/PetHealthy/updateProfile.php',formData,
        {headers: {'content-type': 'multipart/form-data'}}
        ) 
            console.log (response.data)
        Alert.alert(response.data)
      
    }
    return (
        <ScrollView>
            <Card> 
        <View style= {{backgroundColor: '#dcdcdc', marginBottom:5}}>
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
        </View> 
    <View style={{marginTop: 10}}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#4682b4'}}>MIS DATOS</Text>
    </View>
<View style={{marginTop: 15}}> 
    <Text fontSize="lg" style={{borderColor: 'blue'}} ><Icon
                    as={<Ionicons name="person" />}
                    size={7}
                    ml="2"
                    color="black"
                    /> {nombre}  </Text>
                    </View>
    <View style={{marginTop: 15}}>
    <Text fontSize="lg"><Icon
              as={<Ionicons name="mail" />}
              size={7}
              ml="2"
              color="black"
            /> {correo}</Text>
      </View>
     <View style={{marginTop: 15}}>  
    <Text fontSize="lg"> <Icon
                as={<Ionicons name="call" />}
                size={7}
                ml="2"
                color="black"
                /> {telefono}</Text>
               </View> 
               <View style={{marginTop: 15}}>
    <Text fontSize="lg"><Icon
              as={<Ionicons name="md-navigate" />}
              size={7}
              ml="2"
              color="black"
            /> {domi}</Text>

</View>

<TouchableOpacity 
onPress={() => setShowModal(true)}
                style={{backgroundColor: '#1E1E1E', 
                marginTop: 50,
                padding:20, 
                width:'90%', 
                borderRadius:100,
                flexDirection:'row', 
                justifyContent: 'space-between'}}
                >
                <Text style={{fontWeight:'bold', fontSize:18, color:'#fff'}}>Editar mis datos</Text>
                <MaterialIcons name="play-circle-filled" size={22} color="#fff"/>
            </TouchableOpacity>


    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px" size= "full">
          <Modal.CloseButton />
          <Modal.Header>Actualizar mis datos</Modal.Header>
          <Modal.Body>
          <View style={{marginBottom: 10, marginTop: 10}}>
 
            <Input variant="underlined" 
                   placeholder= "Nombre Completo"
                    value= {value.name}
                    style={{width: '100%',fontSize: 15, textAlign: 'left'}}
                    onChangeText={(text) => setValue({...value,name:text})}
                    InputLeftElement={
                        <Icon
                        as={<Ionicons name="person" />}
                        size={7}
                        ml="2"
                        color="#4682b4"
                        />
                    }
                 />
            </View>
        <View style={{marginTop: 10, marginBottom:10}}>
            <Input variant="underlined" 
            placeholder="Telefono" style={{width: '100%',fontSize: 15, textAlign: 'left'}}
            onChangeText={(text) => setValue({...value,phone:text})}
            InputLeftElement={
                <Icon
                as={<Ionicons name="call" />}
                size={7}
                ml="2"
                color="#4682b4"
                />
            } />
        </View>
        <View  style={{marginTop: 10, marginBottom:10}}>
        <Input variant="underlined" 
        placeholder="ejemplo@gmail.com" 
        style={{width: '100%',fontSize: 15, textAlign: 'left'}}
        onChangeText={(text) => setValue({...value,email:text})}
        InputLeftElement={
            <Icon
              as={<Ionicons name="mail" />}
              size={7}
              ml="2"
              color="#4682b4"
            />
          }/>
          </View> <View style={{marginBottom: 10, marginTop: 0}}>
        <Input variant="underlined" 
                placeholder="Contraseña" 
                style={{width: '100%',fontSize: 15, textAlign: 'left'}}
                onChangeText={(text) => setValue({...value,password:text})}
                InputLeftElement={
                    <Icon
                    as={<Ionicons name="lock-closed" />}
                    size={7}
                    ml="2"
                    color="#4682b4"
                    />
                } />
    </View>
          <View  style={{marginTop: 10, marginBottom:15}}>
        <Input variant="underlined" placeholder="Domicilio" style={{width: '100%',fontSize: 15, textAlign: 'left'}}
       onChangeText={(text) => setValue({...value,address:text})}
       InputLeftElement={
            <Icon
              as={<Ionicons name="md-navigate" />}
              size={7}
              ml="2"
              color="#4682b4"
            />
          }/>
    </View>
 
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false)
                }}
              >
                Cancelar
              </Button>
              <Button style={{backgroundColor: '#4682b4'}}
                onPress={updateData}
                leftIcon={<Icon as={Ionicons} name="save" size="sm" />}
                  >
               Guardar Cambios
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    <View style={{marginTop: 145}}>
  
 
    </View>
            </Card>
        </ScrollView>
    )
}
export default Profile;