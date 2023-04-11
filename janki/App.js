import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView, Image, FlatList, TouchableOpacity} from 'react-native';
import { useState } from 'react';


export default function App() {

  const [pesquisado,setPesquisado] = useState('')

  const [decks, setDecks] = useState([
    {deck: 'Kanji 1', key: 1 },
    {deck: 'Kanji 2', key: 2 },
    {deck: 'Kanji 3', key: 3 },
    {deck: 'Hiragana', key: 4 },
    {deck: 'Katakana', key: 5 },
    {deck: 'Vocab 1', key: 6 },
    {deck: 'Vocab 2', key: 7 },
    ])

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Image
        style={styles.tinyLogo}
        source={require('./assets/smallcolorless.png')}
        />
        <Text style={styles.titleHome}>HOME</Text>
      </View>

      <View style={styles.ladoalado}>
        <View style={styles.ladoum}>
          <Text style={styles.label}>Seus Decks</Text>
        <FlatList style={styles.lista}
        numColumns={1}
        keyExtractor={(item) => item.key}
        data={decks}
        renderItem={({item}) => (
          <TouchableOpacity>
          <Text style={styles.quadrado}>{item.deck}</Text>
          </TouchableOpacity>
        )}
        />
        </View>

        <View style={styles.pesquisa}>
            <Text style={styles.label}>Pesquisar Decks</Text>
          <ScrollView>
            <TextInput
              onChangeText={setPesquisado}
              placeholder= 'Pesquisar' ></TextInput>
      
              {pesquisado != ''  ?
              <Text>Nenhum resultado com {pesquisado} foi encontrado!</Text>
              : 
              <Text></Text>}
          </ScrollView>
        </View> 
      </View>

      <View style={styles.botoes}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: '100%'
  },

  header:{
    //Disposição na tela
    flexDirection: 'row',
    alignItems: 'center',
    //Header propriamente dito
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(241, 208, 189, 1)',
  },

  tinyLogo:{
    width: 40,
    height: 40,
    resizeMode: 'contain', //define como é feita a alteração do tamanho
  },

  titleHome:{
    fontSize: 24,
    left: 130,
  },

  ladoalado: {
    flex: 1,
    flexDirection:'row',
    maxWidth: '100%',

  },

  ladoum:{
    flex: 1,
    flexDirection: 'column',
    Width: '50%',
    borderRightWidth:  2,
  },

  lista: { 
    //Disposição na tela
    backgroundColor: 'white',

  },

  textoDecks:{
    fontSize: 24,
  },

  label:{
    fontSize: 18,
    alignSelf: 'center' //Redundante para o segundo lado, apenas referente ao primeiro
  },

  quadrado:{
    //Texto
    textAlign: 'center',
    fontSize: 24,

    //Configuração das caixas
    backgroundColor: 'rgba(253, 216, 182, 0.44)',
    width: 120,
    height: 80,
    paddingTop: 20,
    marginTop:  20,
    borderRadius: 8,
    alignSelf: 'center'
    },

    pesquisa: {
      alignItems: 'center',
      width: '50%'
    },

    botoes: {
      backgroundColor: 'purple',
    },
});
