import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../paginas/home'
import Detalhes from '../paginas/detalhes'
import Pesquisa from '../paginas/buscar'

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
                options={{
                    title: "Detalhes da receita"
                }}
            />
            <Stack.Screen
                name="Pesquisa"
                component={Pesquisa}
                options={{
                    title: "Veja o que encontramos"
                }}
            />
        </Stack.Navigator>
    )
}