import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  ListRenderItemInfo,
  ImageSourcePropType,
} from 'react-native';
import { VegetablesIcon } from '../assets/Icons';
import CategoriasHeader from '../components/MainPage/CategoriasHeader';
import { COLORS } from '../constants/Colors';

interface Item {
  nome: string;
  icone?: ImageSourcePropType;
}

const categorias: Item[] = [
  {
    nome: 'Verduras',
    icone: VegetablesIcon,
  },
  {
    nome: 'Alimentos',
    icone: undefined,
  },
];

function MainPage() {
  const renderItem = ({ item }: ListRenderItemInfo<Item>) => {
    return (
      <View>
        {item.icone && <Image style={styles.categoriaIcone} source={item.icone} />}
        <Text>{item.nome}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={CategoriasHeader}
        data={categorias}
        renderItem={renderItem}
        keyExtractor={(item) => item.nome}
        style={styles.categoriasList}
        horizontal
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  categoriasList: {
    marginTop: '100%',
  },
  categoriaIcone: {
    borderRadius: 5,
    width: 60,
    height: 60,
  },
});

export default MainPage;
