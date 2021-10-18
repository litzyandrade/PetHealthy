
import React from 'react';
import { NativeBaseProvider,extendTheme, Container} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
 
const Stack = createNativeStackNavigator();

  export default function App() {
    const theme= extendTheme(
      {
        colors: {
          primary:{
            50: '#E0F7FA',
            100: '#B2EBF2',
            200: '#80DEEA',
            300: '#4DD0E1',
            400: '#26C6DA',
            500: '#00BCD4',
            600: '#00ACC1',
            700: '#0097A7',
            800: '#00838F',
            900: '#006064'
          }
        }
      }
    )
    return (
 
<NavigationContainer>
     <NativeBaseProvider theme = {theme}>
        
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false }}/>
          <Stack.Screen name="Login" component={Login} options={{headerStyle: {
            backgroundColor: '#4682b4',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          }}}/>
        </Stack.Navigator>

     </NativeBaseProvider>
   </NavigationContainer>
   

    )
  }