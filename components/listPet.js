import React, {useEffect, useState } from "react"
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
  Image
} from "native-base"
import { Entypo } from "@expo/vector-icons"
import axios, {Axios} from "axios";

const listPet=()=>{
   
    const [pets, setPets] = useState([])
  
    useEffect(() =>{
      const getData = async() => {
        
        const response = await axios.get('http://192.168.100.7/PetHealthy/getPets.php')
          setPets(response.data);
        console.log("MASCOTAS", pets)
      }
      getData();
      }, [setPets]);
    
     
      

      return (
        <Box
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Heading fontSize="xl" p="4" pb="3">
            Mis Mascotas
          </Heading>
          <FlatList
            data={pets}
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
               {item.img && <Image
                      size={60}
                      source=
                      {{uri: item.img}}
                      alt="Alternate Text"
    />}
                  <VStack>
                    <Text
                    fontSize="md"
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.Nombre}
                    </Text>
                    <Text
                    fontSize="sm"
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.Raza}
                    </Text>
                  </VStack>
                  <Spacer />
                  <IconButton
                        icon={<Icon as={Entypo} name="arrow-with-circle-right" />}
                        borderRadius="full"
                        _icon={{
                            color: "#4682b4",
                            size: "md",
                        }}
                        _hover={{
                            bg: "#4682b4:alpha.20",
                        }}
                        _pressed={{
                            bg: "#4682b4",
                            _icon: {
                            name: "chevron-small-right",
                            },
                        }}
                        _ios={{
                            _icon: {
                            size: "2xl",
                            },
                        }}
                        />
                        <IconButton
                        icon={<Icon as={Entypo} name="trash" />}
                        borderRadius="full"
                        _icon={{
                            color: "#b22222",
                            size: "md",
                        }}
                        _hover={{
                            bg: "#4682b4:alpha.20",
                        }}
                        _ios={{
                            _icon: {
                            size: "2xl",
                            },
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

export default listPet;