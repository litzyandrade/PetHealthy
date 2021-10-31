import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios, {Axios} from 'axios';
import {
  StyledContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  ButtonText,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  PageLogo1,
} from './../components/styles';
import { View, Alert} from 'react-native';
import { ScrollView} from 'native-base';
//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Ionicons } from '@expo/vector-icons';

const Register = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isHidden, setIsHidden] = useState(false)
  const handleClick= () => setIsHidden(!isHidden)

  const [value,setValue] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
})


const handleSubmit = async () =>{
  const formData = new FormData();
 
  formData.append('name', value.name)
  formData.append('phone', value.phone)
  formData.append('email', value.email)
  formData.append('password', value.password)
 
  const response = await axios.post
  (
  'http://192.168.100.7/PetHealthy/register.php',formData,
  {headers: {'content-type': 'multipart/form-data'}}
  ) 

  Alert.alert(response.data) 
  navigation.navigate('Login')
    
  }
  return (
    <ScrollView>
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo1 resizeMode="cover" source={{uri: 'https://image.freepik.com/vector-gratis/cola-personas-mascotas-sala-veterinaria-hombre-invitando-veterinaria-lindo-perro-su-oficina_74855-11027.jpg'}} />
        <PageTitle>Pet Healthy</PageTitle>
        <SubTitle>Registrate</SubTitle>

            <StyledFormArea>
            <MyTextInput
                label="Nombre Completo"
                placeholder="Jazmin Andrade"
                placeholderTextColor={darkLight}
                keyboardType="email-address"
                icon='person'
                onChangeText={(text) => setValue({...value,name:text})}
              />
            <MyTextInput
                label="Telefono Celular"
                placeholder="4491236789"
                placeholderTextColor={darkLight}
                icon="device-mobile"
                onChangeText={(text) => setValue({...value,phone:text})}
              />
            <MyTextInput
                label="Correo electronico"
                placeholder="ejemplo@mail.com"
                placeholderTextColor={darkLight}
                keyboardType="email-address"
                icon="mail"
                onChangeText={(text) => setValue({...value,email:text})}
              />
              <MyTextInput
                label="Contraseña"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                icon="lock"
                secureTextEntry = {true}
                onChangeText={(text) => setValue({...value,password:text})}
              />
              <StyledButton onPress = {handleSubmit}>
                <ButtonText>Registrarme</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>¿Ya tienes una cuenta? </ExtraText>
                <TextLink>
                  <TextLinkContent  onPress={() => navigation.navigate('Login')}>Inicia sesion</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
    </ScrollView>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword,value, setValue, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Register;