import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

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
import { View } from 'react-native';
import { ScrollView} from 'native-base';
import {MaterialIcons} from "@expo/vector-icons"
//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import { fontSize } from 'styled-system';

const Register = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [isHidden, setIsHidden] = useState(false)
  const handleClick= () => setIsHidden(!isHidden)
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
              />
            <MyTextInput
                label="Domicilio"
                placeholder="ejemplo@mail.com"
                placeholderTextColor={darkLight}
                icon="pin"
              />
            <MyTextInput
                label="Correo electronico"
                placeholder="ejemplo@mail.com"
                placeholderTextColor={darkLight}
                keyboardType="email-address"
                icon="mail"
              />
              <MyTextInput
                label="Contraseña"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                icon="lock"
                secureTextEntry = {true}
            
              />
               <MyTextInput
                label="Confirma contraseña"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                icon="lock"
                secureTextEntry = {true}
            
              />
              <StyledButton>
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

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
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