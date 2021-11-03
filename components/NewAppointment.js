import React, { useState } from 'react';
import { ScrollView, Text, Input, Button , Icon, Select, CheckIcon,  Pressable, HStack,Box,Spacer} from 'native-base';
import {View, Alert} from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import {MaterialIcons} from "@expo/vector-icons";
import axios, {Axios} from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';

const NewAppointment =({route})=>{

  
  const [value,setValue] = useState({
    tipo: '',
    mascota: '',
    propietario: ''
})

const handleSubmit = async () =>{
   
    const formData = new FormData();

    formData.append('tipo', value.tipo)
    formData.append('mascota', value.mascota)
    formData.append('propietario', value.propietario)
    const response = await axios.post
    (
    'http://192.168.100.7/PetHealthy/AddAppointment.php',formData,
    {headers: {'content-type': 'multipart/form-data'}}
    ) 
      console.log(response.data)
      Alert.alert(response.data)

  }
    return (
        <ScrollView>
       <Text style={{textAlign:'center',marginTop:10, fontSize: 20}}>SOLICITA UNA CONSULTA MEDICA</Text>
        <Select
            selectedValue={value.tipo}
            fontSize= '15'
            minWidth="200"
            accessibilityLabel="Escoge tipo de consulta"
            placeholder="Escoge tipo de consulta"
            _selectedItem={{
              bg: "#4682b4",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setValue({...value,tipo:itemValue})}
          >
            <Select.Item label="Consulta medica" value="Consulta medica" />
            <Select.Item label="Baño de mascota" value="Baño" />
       
        </Select>
        <Pressable style={{marginTop: 10, marginBottom:10}}>
      <Box p="5" rounded="8" bg="#dcdcdc">
        <HStack alignItems="flex-start">
        <Text color="#4682b4" mt="3" fontWeight="medium" fontSize={18}>
          Consulta medica
        </Text>
          <Spacer />
          <Text color="#4682b4" mt="3" fontWeight="medium" fontSize={18}>
             Baño
        </Text>
        </HStack>
       
        <Text color="#4682b4" mt="3" fontWeight="medium" fontSize={16} style={{textAlign:'center'}}>
        -------------------------- ¿Que incluyen? -------------------------
        </Text>
      
        <HStack alignItems="flex-start">
        <Text color="black" mt="3" fontWeight="medium" fontSize={14}>
          Consulta especializada
        </Text>
          <Spacer />
          <Text color="black" mt="3" fontWeight="medium" fontSize={14}>
             Aseo
        </Text>
        </HStack>
        <HStack alignItems="flex-start">
        <Text color="black" mt="3" fontWeight="medium" fontSize={14}>
          Medicamentos se cobran aparte
        </Text>
          <Spacer />
          <Text color="black" mt="3" fontWeight="medium" fontSize={14}>
             Cepillado
        </Text>
        </HStack>

        <HStack alignItems="flex-start">
      
          <Spacer />
          <Text color="black" mt="3" fontWeight="medium" fontSize={14}>
            Accesorio
        </Text>
        </HStack>
      </Box>
    </Pressable>
   
        <View style={{marginBottom: 10, marginTop: 10}}>
 
            <Input variant="underlined" 
            placeholder="Nombre Mascota"
            onChangeText = {(text) => setValue({...value,mascota: text})}
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
        <View style={{marginBottom: 10, marginTop: 10}}>
 
            <Input variant="underlined" 
            placeholder="Tu email" 
            onChangeText = {(text) => setValue({...value,propietario: text})}
            style={{width: '100%',fontSize: 15, textAlign: 'left'}}
            InputLeftElement={
                <Icon
                as={<MaterialIcons name="person" />}
                size={7}
                ml="2"
                color="#4682b4"
                />
            }
            />
        
        </View>
        <Button onPress = {handleSubmit} leftIcon={<Icon as={Ionicons} name="save" size="sm"  />}
        style={{backgroundColor: '#4682b4'}}>SOLICITAR CONSULTA</Button>
        </ScrollView>
    )
}
export default NewAppointment;