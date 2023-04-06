import { Text ,StyleSheet } from "react-native";
import { View } from 'moti'

export  function Logo(){
    return(
        <View 
        style={estilo.LogoArea}
        from={{
            opacity: 0,
            translateX: -50,
        }}
        animate={{
            opacity: 1,
            translateX: 0,
        }}
        transition={{       
           type: 'spring' ,
           duration: 850,
        }}
        >
            <Text style={estilo.logo}>Receita Facil</Text>
        </View>

    )
}

const estilo = StyleSheet.create({
    LogoArea:{
        backgroundColor:'blue',
        alignSelf:'flex-start',
        padding:8,
        paddingLeft:16,
        paddingRight:20,
        borderTopRigthRadius:8,
        borderBottomLeftRadius:8,
        borderTopLeftRadius:8,
        borderBottomRightRadius:32,
        marginBottom:8,

    },
    logo:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
    }
});