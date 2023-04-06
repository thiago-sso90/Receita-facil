import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import api from "../../service/api";
import Foodlista from "../../componentes/logo/foodlist";

export default function Buscar() {

    const routes = useRoute();
    const [receitas, setreceitas] = useState([])

    useEffect(() => {
        async function buscarReceita() {
            const response = await api.get(`/foods?name_like=${routes.params?.name}`)
            setreceitas(response.data);

        }
        buscarReceita();

    }, [routes.params?.name])

    return (
        <View style={estilo.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={receitas}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Foodlista data={item} />}
                ListEmptyComponent={() => <Text style={estilo.texto}>Não encontramos o que está buscando...</Text>}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: "#f3f9ff",
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14,
    },
    texto:{
        fontSize: 16,
    }
})