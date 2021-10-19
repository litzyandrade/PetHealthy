import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

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
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from './../components/styles';
import { View } from 'react-native';
import { Input, Pressable,Icon } from 'native-base';
import {MaterialIcons} from "@expo/vector-icons"
//colors
const { darkLight, brand, primary } = Colors;

// icon
import { Octicons, Fontisto, Ionicons } from '@expo/vector-icons';

const Login = () => {

  const [isHidden, setIsHidden] = useState(false)
  const handleClick= () => setIsHidden(!isHidden)
  return (
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
              />
              <MyTextInput
                label="Contraseña"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                icon="lock"
               
            
              />
              <MsgBox>...</MsgBox>
              <StyledButton>
                <ButtonText>INICIA SESION</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>¿Aun no tienes cuenta? </ExtraText>
                <TextLink>
                  <TextLinkContent>Registrate</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
      </InnerContainer>
    </StyledContainer>
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

export default Login;