import { View, Text ,StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getFavoritos } from "../../utils/storage";
import { useIsFocused } from "@react-navigation/native";
import Foodlista from "../../componentes/logo/foodlist";

export default function Favoritos(){
const [receitas , setreceitas] = useState([]);
const isfocused = useIsFocused();

useEffect(() => {

    let isActive = true;
        async function getReceitas(){
            const resultado = await getFavoritos("@appreceitas")
            if(isActive){
                setreceitas(resultado);
            }
        }

        if(isActive){
            getReceitas();
        }
        return () => {
            isActive = false;
        }
      
}, [isfocused])

    return(
        <SafeAreaView style={estilo.container}>
            <Text style={estilo.titulo}>Receitas favoritas</Text>

            {receitas.length === 0 &&(
                <Text style={estilo.texto}>Você ainda não tem uma receita salva.</Text>
                )}
                <FlatList
                showsVerticalScrollIndicator={false}
                style={{marginTop: 14}}
                data={receitas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <Foodlista data={item}/> }
                />

        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor: "#f3f9ff",
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 80,
    },
    titulo:{
        color: "#000",
        fontWeight: 'bold',
        fontSize: 24,
    },
    texto:{
       fontSize: 16,
       fontWeight: 'bold' 
    }
})