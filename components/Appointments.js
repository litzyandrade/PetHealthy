import React, {useEffect, useState} from "react"
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
 IconButton,
 Icon,
 Hidden,
 Input
} from "native-base"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {Axios} from "axios";
import { Entypo } from "@expo/vector-icons"
import { Alert } from "react-native";
const Appointments =()=>{
  
  const [citas, setCitas] = useState([])
  const [idCita, setIdCita] = useState("")

  useEffect(() =>{
    const getData = async() => {
      const UserLog = await AsyncStorage.getItem('@storage_Key')
      const formData = new FormData();
      formData.append('email', UserLog)
      
      const response = await axios.post('http://192.168.100.7/PetHealthy/getCitas.php', formData,
      {headers: {'content-type': 'multipart/form-data'}})
        setCitas(response.data);
      console.log("CITAS", citas)
    }
    getData();
    });
    
    const DeleteAppointment = async () =>{
      
      const formData = new FormData();
      formData.append('id', idCita)
      
      const response = await axios.post('http://192.168.100.7/PetHealthy/deleteAppointment.php', formData,
      {headers: {'content-type': 'multipart/form-data'}})

      Alert.alert(response.data);
  
    }
  
      return (
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Heading fontSize="xl" p="4" pb="3">
            Consultas solicitadas
          </Heading>
          <FlatList
            data={citas}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: "https://www.kindpng.com/picc/m/6-67193_calendario-fechas-horario-fecha-plan-diario-icono-blue.png",
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.tipo}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.fecha}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.nombreMascota}
                    </Text>
                  </VStack>
                  <Spacer />
                  <Hidden>
                  <Input
                  value= {item.id}
                  onChangeText = {setIdCita(item.id)}
                  />
                 </Hidden>
                  <IconButton
                        onPress= {DeleteAppointment}
                        icon={<Icon as={Entypo} name="trash" />}
                        borderRadius="full"
                        _icon={{
                            color: "#b22222",
                            size: "md",
                        }}
                        _hover={{
                            bg: "#4682b4:alpha.20",
                        }}
                        />
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
      )
}
export default Appointments;