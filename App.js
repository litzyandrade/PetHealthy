
import React from 'react';
import { NativeBaseProvider,extendTheme} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text,  Image} from 'react-native';
import Profile from './components/Profile';
import Pets from './components/Pets';
import Appointments from './components/Appointments';
import NewAppointment from './components/NewAppointment';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
const Stack = createNativeStackNavigator();
{/* Custom header   */}
function CustomHeaderStack(){
return (
 <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20, fontStyle: 'italic'}}>
   Pet <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 20}}>Healthy</Text></Text>
)
}
{/* TAB NAVIGATOR  */}
const Tab = createBottomTabNavigator();
function UserTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Perfil') {
          iconName = focused
            ? require('./images/user.png')
            : require('./images/user.png');
        } else if (route.name === 'Mascotas') {
          iconName = focused ? require('./images/pawprint.png') : require('./images/pawprint.png');
        }
        else if (route.name === 'Consultas') {
          iconName = focused ? require('./images/calendar.png') : require('./images/calendar.png');
        }
        else if (route.name === 'Crear Cita') {
          iconName = focused ? require('./images/plus.png') : require('./images/plus.png');
        }

        // You can return any component that you like here!
        return <Image source= {iconName} style={{width: 30, height:30}} resizeMode= "contain"/>;
      },
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'black',
      tabBarActiveBackgroundColor:'#4682b4',
      tabBarInactiveBackgroundColor: '#4682b4'
    })}>
      <Tab.Screen name="Perfil" component={Profile}  options={{headerShown :false}}/>
      <Tab.Screen name="Mascotas" component={Pets} options={{headerShown :false}}/>

      <Tab.Screen name="Consultas" component={Appointments}options={{headerShown :false}} />
      <Tab.Screen name="Crear Cita" component={NewAppointment}options={{headerShown :false}} />
      
      
    </Tab.Navigator>
  );
}
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
  {/* STACKSSS  */}
  return (
    <NavigationContainer>
         <NativeBaseProvider theme = {theme}>
         <Stack.Navigator initialRouteName="Home"  >
            <Stack.Screen name="Home" component={Home} options={{headerShown :false}}/> 
            <Stack.Screen name="Login" component={Login} options={{headerStyle: {
            backgroundColor: '#4682b4',
          },
          title: 'Inicia Sesion',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          }}}/>
          <Stack.Screen name="Register" component={Register} options={{headerStyle: {
            backgroundColor: '#4682b4',
          },
          title: 'Crear Cuenta',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          }}}/>
            <Stack.Screen name="Usuario" component={UserTabs} options={{headerStyle: {
                    backgroundColor: '#4682b4',
                  },
                  headerTitle:(props) => <CustomHeaderStack {...props} /> ,
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    
                  }}}/> 
                  
               
    </Stack.Navigator>
      </NativeBaseProvider >
    </NavigationContainer>
  );
}

