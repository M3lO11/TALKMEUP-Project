import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TalkMeUpLanding from './TalkMeUpLanding';
import LoginComponent from './LoginComponent';
import ForgotPassword from './ForgotPassword';
import RegisterComponent from './RegisterComponent';
import EmailVerification from './EmailVerification';
import PasswordResetSuccess from './PasswordResetSuccess';
import NewPasswordScreen from './NewPasswordScreen';
import Preferencias1 from './Preferencias1';
import Preferencias2 from './Preferencias2';
import Preferencias3 from './Preferencias3';
import Preferencias4 from './Preferencias4';
import TelaPrincipal from './TelaPrincipal';
import NovaClasse from './NovaClasse';
import Perfil from './Perfil';
import PerfilConfig from './PerfilConfig';
import PerfilTutor from './PerfilTutor';
import Search from './Search';
import Creditos from './Creditos';
import VideoConference from './VideoConference';
import HistoricoSessao from './HistoricoSessao';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function DummyScreen() {
  return null;
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Início") {
            return <Octicons name="home" size={size} color={color} />;
          }
          if (route.name === "Contatos") {
            return <MaterialIcons name="person-search" size={size} color={color} />;
          }
          if (route.name === "Aulas") {
            return <Ionicons name="videocam" size={size} color={color} />;
          }
          if (route.name === "Perfil") {
            return <Ionicons name="person" size={size} color={color} />;
          }
          if (route.name === "Biblioteca") {
            return <FontAwesome5 name="coins" size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: "#009BA9",
        tabBarInactiveTintColor: "#D2D2D2",
        tabBarStyle: { borderTopLeftRadius: 30, borderTopRightRadius: 30, height: 70 },
      })}
    >
      <Tab.Screen name="Início" component={TelaPrincipal} />
      <Tab.Screen name="Contatos" component={Search} />
      <Tab.Screen name="Aulas" component={VideoConference} />
      <Tab.Screen name="Biblioteca" component={Creditos} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Landing" 
          component={TalkMeUpLanding} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginComponent} 
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterComponent}
        />
        <Stack.Screen 
          name="EmailVerification" 
          component={EmailVerification}/>
        <Stack.Screen
          name="PasswordResetSuccess"
          component={PasswordResetSuccess}
        />
        <Stack.Screen
          name="NewPassword"
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name="Preferencias1"
          component={Preferencias1}
        />
        <Stack.Screen
          name="Preferencias2"
          component={Preferencias2}
        />
        <Stack.Screen
          name="Preferencias3"
          component={Preferencias3}
        />
        <Stack.Screen
          name="Preferencias4"
          component={Preferencias4}
        />
        <Stack.Screen
          name="TelaPrincipal"
          component={TelaPrincipal}      
        />
        <Stack.Screen
          name="NovaClasse"
          component={NovaClasse}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />   
        <Stack.Screen
          name="PerfilConfig"
          component={PerfilConfig}
        />       
        <Stack.Screen
          name="PerfilTutor"
          component={PerfilTutor}
        />
        <Stack.Screen
          name="Creditos"
          component={Creditos}
        />
        <Stack.Screen
          name="VideoConference"
          component={VideoConference}
        />
        <Stack.Screen
          name="HistoricoSessao"
          component={HistoricoSessao}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
