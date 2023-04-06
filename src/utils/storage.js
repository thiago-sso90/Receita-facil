import AsyncStorege from '@react-native-async-storage/async-storage';

//buscar os favoritos
//salvar um novo favoritos
//remover os favoritos

export async function getFavoritos(key) {
    const favoritos = await AsyncStorege.getItem(key)
    return JSON.parse(favoritos) || [];
}

export async function salvaFavoritos(key, novoItem) {
    let meufavorito = await getFavoritos(key);

    let temItem = meufavorito.some(item => item.id === novoItem.id)

    if (temItem) {
        console.log("ja tem salvo")
        return;
    }
    meufavorito.push(novoItem)

    await AsyncStorege.setItem(key, JSON.stringify(meufavorito))
    console.log("salvo com sucesso")
}

export async function removeFavoritos(id) {
    let receitas = await getFavoritos("@appreceitas")

    let meufavorito = receitas.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorege.setItem("@appreceitas", JSON.stringify(meufavorito));
    console.log("deletado com sucesso");
    return meufavorito;
}

export async function ChecaseFavaorito(receita) {
    let minhareceita = await getFavoritos("@appreceitas")

    const favorito = minhareceita.find(item => item.id == receita.id)

    if (favorito) {
        return true;
    }
    return false;

}

