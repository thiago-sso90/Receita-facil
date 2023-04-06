import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favoritos from "../paginas/favoritos";
import StackRoutes from "./stackRoutes"; 
import {Ionicons} from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#121212",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color,size, focused}) => {
                        if(focused){
                          return  <Ionicons name="home" color="#000" size={size} />
                        }
                        return  <Ionicons name="home-outline" color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                options={{
                    tabBarIcon: ({color,size,focused}) => {
                        if(focused){
                            return <Ionicons name="heart" color='#ff4143' size={size} />
                        }
                        return <Ionicons name="heart-outline" color={color} size={size} />
                    }

                }}
            />
        </Tab.Navigator>
    )
}