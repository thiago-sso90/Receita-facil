import { View,Text,TouchableOpacity,StyleSheet ,SafeAreaView } from "react-native";
import {Feather} from '@expo/vector-icons'
import { WebView} from'react-native-webview'

export default function Video({ henderclose, videoUrl}) {
  return (
    <SafeAreaView style={estilo.container}>
        <TouchableOpacity style={estilo.botao} onPress={henderclose}>
            <Feather name='arrow-left' size={24} color="#ffff"/>
            <Text style={estilo.botaoVoltar}>Voltar</Text>
        </TouchableOpacity>

        <WebView 
        style={estilo.webvideo}
        source={{uri: videoUrl}}
        />
    </SafeAreaView>
      
    
  )
}

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    },
    botao:{
        width: '100%',
        backgroundColor: "blue",
        height: 48,
        flexDirection:"row",
        alignItems: 'center',
        paddingStart: 14,

    },
    botaoVoltar:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 14,
    },
    webvideo:{
        flex: 1,
        width: '100%',
    }
})