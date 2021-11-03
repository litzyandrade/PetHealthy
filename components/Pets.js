import React, { useState,useEffect} from 'react';
import { Text, Input, Button , Icon, Modal, Select, CheckIcon, IconButton} from 'native-base';
import {Image, View,Alert, SafeAreaView} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios, {Axios} from 'axios';
import * as ImagePicker from 'expo-image-picker';
import {MaterialIcons} from "@expo/vector-icons";
import ListPet from './listPet';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Pets(){
  
    const [showModal, setShowModal] = useState(false)

    const [image, setImage] = useState(null);
    const [photoStatus, setPhotoStatus] = useState('No se ha seleccionado ninguna imágen');

    const [value,setValue] = useState({
        image: '',
        nombre: '',
        sexo: '',
        raza: '',
        color: '',
        edad: ''
    }) 

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Lo sentimos, se necesitan permisos para acceder a la galería');
            }
          }
        })();
      }, []);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
            setPhotoStatus('Listo!, imágen cargada correctamente')
        }
        if (result.cancelled ==false){
            console.log (result.uri)
            setImage(result.uri);
            setValue({...value, image: result.uri})
            setPhotoStatus('Listo!, imágen cargada correctamente')
        }
   
      }

      const handleSubmitPet = async () =>{

        let localUri =value.image ;
        if (localUri == null || localUri == '') {
            Alert.alert('Debe seleccionar una imágen')
          }else{

            let filename = localUri.split('/').pop();
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;
            
            const UserLog = await AsyncStorage.getItem('@storage_Key')
         
            const formData = new FormData();
           
           
            formData.append('nombre', value.nombre)
            formData.append('sexo', value.sexo)
            formData.append('raza', value.raza)
            formData.append('color', value.color)
            formData.append('edad', value.edad)
            formData.append('email', UserLog)
            formData.append('image', { uri: localUri, name: filename, type });
           
           
            const response = await axios.post
            (
            'http://192.168.100.7/PetHealthy/addPet.php',formData,
            {headers: {'content-type': 'multipart/form-data'}}
            )
            Alert.alert(response.data)
            console.log(response);
        
          }

        }


    return (
<SafeAreaView>
     <View>
            <Button leftIcon={<Icon as={Ionicons} name="add-circle" size="sm"  />}
            style={{backgroundColor: 'black',marginBottom:10}} onPress={() => setShowModal(true)}>Agregar Mascota</Button>    
     </View>
   
    <View>
      <ListPet/>
    </View>
    
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="xl">
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Dar de alta mascota</Modal.Header>
          <Modal.Body>
           
          <View style={{ alignItems: 'center' }}>
            <Button style={{backgroundColor: '#4682b4'}}
              onPress={pickImage}
            >Seleccionar Imagen</Button>
            <Text style={{ fontSize: 12, marginBottom: 20, color: "#888888" }}>{photoStatus}</Text>
            {image && <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />}
        </View>

          <View style={{marginBottom: 10, marginTop: 10}}>
 
                <Input variant="underlined" 
                placeholder="Nombre" 
                onChangeText={(text) => setValue({...value,nombre:text})}
                style={{width: '100%',fontSize: 15, textAlign: 'left'}}
                InputLeftElement={
                    <Icon
                    as={<MaterialIcons name="pets" />}
                    size={7}
                    ml="2"
                    color="#4682b4"
                    />
                }
            />
        </View>
            <Select
            selectedValue={value.sexo}
            minWidth="200"
            accessibilityLabel="Genero"
            placeholder="Genero"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setValue({...value,sexo:itemValue})}
          >
            <Select.Item label="Hembra" value="hembra" />
            <Select.Item label="Macho" value="macho" />
       
        </Select>
      <View style={{marginBottom: 10, marginTop: 10}}>
 
          <Input variant="underlined" 
          placeholder="Raza" 
          style={{width: '100%',fontSize: 15, textAlign: 'left'}}
          onChangeText={(text) => setValue({...value,raza:text})}
          InputLeftElement={
              <Icon
              as={<MaterialIcons name="pets" />}
              size={7}
              ml="2"
              color="#4682b4"
              />
          }
          />
      </View>
      <View style={{marginBottom: 10, marginTop: 10}}>
      
        <Input variant="underlined" 
        placeholder="Color" 
        style={{width: '100%',fontSize: 15, textAlign: 'left'}}
        onChangeText={(text) => setValue({...value,color:text})}
        InputLeftElement={
            <Icon
            as={<MaterialIcons name="invert-colors" />}
            size={7}
            ml="2"
            color="#4682b4"
            />
        }
        />
      </View>
      <View style={{marginBottom: 10, marginTop: 10}}>
      
          <Input variant="underlined" 
          placeholder="Edad (meses)" 
          style={{width: '100%',fontSize: 15, textAlign: 'left'}}
          onChangeText={(text) => setValue({...value,edad:text})}
          InputLeftElement={
              <Icon
              as={<MaterialIcons name="water-damage" />}
              size={7}
              ml="2"
              color="#4682b4"
              />
          }
          />
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
               onPress={handleSubmitPet}
              >
                Guardar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      </SafeAreaView>
    )
}

export default Pets;