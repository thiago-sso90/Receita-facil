import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { View, Text ,StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from "react-native";

import {Ionicons} from '@expo/vector-icons'
import api from "../../service/api";
import { Logo } from "../../componentes/logo";
import Foodlista from "../../componentes/logo/foodlist";
import {Text as MotiText} from 'moti'

export default function Home(){
    const [inputValue, setinputValue] = useState("");
    const [foods , setFoods] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
     async function fetchApi(){
        const response = await api.get("/foods")
        setFoods(response.data);
      }
      fetchApi();
      
        // console.log("carregou")
    }, [])

    function buscar(){
        if(!inputValue) return;

        let input = inputValue;
        setinputValue("");

        navigation.navigate("Pesquisa", {name : input})

        console.log("Voce digitou: ")
        console.log(inputValue);
    }
    return(
        <SafeAreaView style={estilo.container}>
            <Logo />
            <MotiText 
            style={estilo.titulo}
            from={{
                opacity: 0,
                translateY: 15,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
               delay: 100,
               type: 'timing' ,
               duration: 650,
            }}
            >Encontre a receita</MotiText>
            <MotiText style={estilo.titulo}
             from={{
                opacity: 0,
                translateY: 18,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
               delay: 200,
               type: 'timing' ,
               duration: 850,
            }}
            >
                que combina com você</MotiText>
           
            <View style={estilo.form}>
                <TextInput 
                placeholder="Digite o nome da comida..."
                style={estilo.input}
                value={inputValue}
                onChangeText={(texto) => setinputValue(texto)}
                />
                <TouchableOpacity onPress={buscar}>
                    <Ionicons name="search" size={28} color="blue" />
                </TouchableOpacity>
            </View>

            <FlatList 
            data={foods}
            keyExtractor={(item) => String(item.id) }
            renderItem={({item}) => <Foodlista data={item}/>}
            showsVerticalScrollIndicator={false}
            />
        
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#f3f9ff",
        paddingTop: 80,
        paddingStart: 14,
        paddingEnd:14,
    },

    titulo:{
        fontSize:26,
        fontWeight: "bold",
        color: "#0e0e0e",
    },
    form:{
        width: '100%',
        backgroundColor: "#fff",
        borderRadius: 8,
        marginTop:16,
        marginBottom:14,
        borderWidth: 1,
        borderColor: "#000",
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: "space-between",

    },
    input:{
        width: '90%',
        height: 54,



    }
})