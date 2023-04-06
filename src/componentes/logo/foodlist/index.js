import { View, Text ,StyleSheet, TouchableOpacity,Image} from "react-native";
//import  LinearGradient  from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function Foodlista({data}){

    const navigation = useNavigation();
    function handleNavigate(){
      navigation.navigate("Detalhes",{data: data})
    }

    return(
        <TouchableOpacity activeOpacity={0.8} style={estilo.container} onPress={handleNavigate}>
            <Image source={{uri: data.cover}} 
            style={estilo.cover}
            />
            <View style={estilo.info}>
                <Text style={estilo.nome}>{data.name}</Text>
                <Text style={estilo.descricao}>{data.total_ingredients} ingredientes | {data.time} min.</Text>
            </View>
        {/* <LinearGradient 
                style={estilo.gradiente}
                color={['transparent','rgba(0,0,0,0.70)' ,'rgba(0,0,0,0.95)']}
        /> */}

        
        </TouchableOpacity>
    )
}

const estilo = StyleSheet.create({
    container:{
       marginBottom: 16, 
    },
    cover:{
        width:'100%',
        height: 200,
        borderRadius: 14,
    },
    info:{
        position: "absolute",
        bottom: 14,
        left:14,
        zIndex: 99,
        
    },
    nome:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",

    },
    descricao:{
        color: "#fff"
    },
    gradiente:{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: '555',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: "tranparent",
    }
})