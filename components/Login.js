import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import axios, {Axios} from 'axios';
import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from './../components/styles';
import { Alert, View } from 'react-native';
import {ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons,  Ionicons } from '@expo/vector-icons';
import { useWorkletCallback } from 'react-native-reanimated';

const Login = ({ navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isHidden, setIsHidden] = useState(false)
  const handleClick= () => setIsHidden(!isHidden)

  
  const [value,setValue] = useState({
    email: '',
    password: ''
})

const handleLogin = async () =>{
  storeData();
  const formData = new FormData();

  formData.append('email', value.email)
  formData.append('password', value.password)

  const response = await axios.post
  (
  'http://192.168.100.7/PetHealthy/login.php',formData,
  {headers: {'content-type': 'multipart/form-data'}}
  ) 

 if (response.data === 'Correo o contraseña incorrectos. Intente de nuevo'){
    Alert.alert(response.data)
  } else {
      const user = response.data;

      console.log(response.data)
      navigation.navigate('Usuario',{
        screen:'Perfil',
        params: {
        data: user}});
  }

}
const storeData = async () => {
  try {
    const em = value.email;
    await AsyncStorage.setItem('@storage_Key', em)
    console.log(em);
  } catch (e) {
    console.log(e);
  }
}
  return (
    <ScrollView>
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={{uri: 'https://image.freepik.com/free-photo/close-up-veterinarian-taking-care-dog_23-2149100195.jpg'}} />
        <PageTitle>Pet Healthy</PageTitle>
        <SubTitle>Inicia Sesion</SubTitle>

            <StyledFormArea>
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

              <StyledButton onPress = {handleLogin}>
                <ButtonText >INICIA SESION</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>¿Aun no tienes cuenta? </ExtraText>
                <TextLink onPress={() => navigation.navigate('Register')}>
                  <TextLinkContent >Registrate</TextLinkContent>
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

export default Login;