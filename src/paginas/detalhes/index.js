import { View, Text, StyleSheet, Pressable, ScrollView,Image , Modal, Share} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useLayoutEffect,useState } from "react";
import { Entypo, AntDesign, Feather } from '@expo/vector-icons'
import Ingredientes from "../../componentes/logo/ingredientes";
import Instrucao from "../../componentes/logo/instrucao";
import Video from "../../componentes/video";
import { ChecaseFavaorito, removeFavoritos, salvaFavoritos } from "../../utils/storage";

export default function Detalhes() {

    const route = useRoute();
    const navegation = useNavigation();

    const[abrevideo, setabrevideo] = useState(false);
    const [favorite , setfavorite] = useState(false)
    

    useLayoutEffect(() => {

        async function getstatusfavorito(){
            const receitaFavorita = await ChecaseFavaorito(route.params?.data)
            setfavorite(receitaFavorita);
        } 
        getstatusfavorito();


        navegation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => preencheFavoritoreceita(route.params?.data)}>
                    {favorite ? (
                             <Entypo
                             name="heart"
                             size={28}
                             color="#ff4141"
                         />
                    ) : (    
                         <Entypo 
                        name="heart-outlined"
                        size={28}
                        color="#ff4141"
                    />
                    )}
                </Pressable>
            )
        })

    }, [navegation, route.params?.data, favorite])

    async function preencheFavoritoreceita(receita){
        if(favorite){
            await removeFavoritos(receita.id)
            setfavorite(false);
        }else{
            await salvaFavoritos("@appreceitas", receita)
            setfavorite(true);
        }
    }

    function abrirVideo(){
        setabrevideo(true);
    }

    async function compartilhar(){
        try {
            await Share.share({
                url: "https://sujeitoprogramador.com",
                message: `Receita: ${route.params?.data.name}\n Ingredientes ${route.params?.data.total_ingredients}\n`
            })
        } catch (error) {
            console.log("Erro")
        }
    }

    return (
        <ScrollView contentContainerStyle={{paddingBottom: 14}} style={estilo.container} showsVerticalScrollIndicator={false}>
         <Pressable onPress={abrirVideo}>
            <View style={estilo.iconePlay}>
                <AntDesign name="playcircleo" size={50} color="#ffff"/>
            </View>
            <Image
            source={{uri: route.params?.data.cover}}
            style={estilo.imagem}
            />
         </Pressable>

         <View style={estilo.hederDetalhes}>
            <View>
                <Text style={estilo.titulo}>{route.params?.data.name}</Text>
                <Text style={estilo.ingredientes}>Ingredientes ({route.params?.data.total_ingredients})</Text>   
            </View>
            <Pressable onPress={compartilhar}>
                <Feather name="share-2" size={24} color="#121212"/>
            </Pressable>
         </View>
         {route.params?.data.ingredients.map((item) => (
                 <Ingredientes key={item.id} data={item}/>
         ))}

         <View style={estilo.instrucaoArea}>
            <Text style={estilo.instrucaoTexto}>Modo de preparo</Text>
            <Feather
            name="arrow-down"
            size={24}
            color="#ffff"
            />
         </View>
         {route.params?.data.instructions.map((item,index) => (
                <Instrucao key={item.id} data={item} index={index}/>
         ))}
         <Modal visible={abrevideo} animationType="slide">
            <Video
            henderclose={() =>setabrevideo(false)}
            videoUrl={route.params?.data.video}
            />
         </Modal>

    
        </ScrollView>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: "#f3f9ff",
        paddingTop: 14,
        paddingEnd: 14,
        paddingStart: 14,
    },
    imagem:{
        height: 200,
        borderRadius: 14,
        width:"100%",
    },
    iconePlay:{
        position: "absolute",
        zIndex: 9,
        top: 0 ,left: 0, right: 0, bottom: 0,

        alignItems: "center",
        justifyContent: "center",
    },
    titulo:{
        fontSize: 18,
        marginTop: 14,
        fontWeight: "bold",
        color:"#000",
        marginBottom: 4,
    },
    ingredientes:{
        marginBottom: 16,
        fontSize: 16,
    },
    hederDetalhes:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        marginBottom: 14,
    },
    instrucaoArea:{
        backgroundColor: "blue",
       flexDirection: "row",
       padding: 8,
       borderRadius: 4,
       marginBottom: 14,

    },
    instrucaoTexto:{
        fontSize:18,
        fontWeight: 500,
        color: "#ffff",
        marginRight: 8,
    }
})