import {View,Text , StyleSheet} from 'react-native'

export default function Ingredientes({data}) {
  return (
    <View style={estilo.container}>
        <Text style={estilo.nome}>{data.name}</Text>
        <Text>{data.amount}</Text>
    </View>
  )
}

const estilo = StyleSheet.create({
    container:{
        backgroundColor:"#cccc",
        marginBottom: 14,
        flexDirection:"row",
        justifyContent: "space-between",
        padding: 12,
        borderRadius: 4,
    },
    nome:{
        fontWeight: 500,
        fontSize: 16,
    }
})