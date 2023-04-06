import {View,Text,StyleSheet} from 'react-native'

export default function Instrucao({data,index}) {
  return (
    <View style={estilo.container}>
         <Text style={estilo.numero}>{index +1}-</Text>
        <Text style={estilo.Textopreparo}>{data.text}</Text>
    </View>
  )
}
const estilo = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 8,
    },
    numero:{
        fontWeight: "bold",
        fontSize: 18,
    },
    Textopreparo:{
        lineHeight: 20,
    }
})