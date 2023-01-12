import { Image, Text, HStack, Icon, Input, VStack } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import Screen from '../../components/Screen';
import produtos from '../../produtos.json';
import ProductList from '../../components/MainPage/Product';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { ProductType } from '../../types/product';
import Product from '../../components/MainPage/Product';
import ProductHeader from '../../components/MainPage/ProductHeader';

function ProductsScreen() {
  const renderProduct = ({ item }: ListRenderItemInfo<ProductType>) => (
    <Product id={item.id} name={item.name} price={item.price} />
  );

  return (
    <Screen>
      <VStack flex={1} px={6} space={6}>
        <Input
          w="full"
          rounded="2xl"
          placeholder="Pesquisar produto"
          fontSize="md"
          bgColor="white"
          InputLeftElement={
            <Icon
              as={EvilIcons}
              name="search"
              color="gray.800"
              size={8}
              ml={2}
            />
          }
        />
        <ProductHeader
          title="Águas"
          totalProducts={produtos.aguas.slice(0, 3).length}
        />
        <FlatList
          data={produtos.aguas.slice(0, 3)}
          renderItem={renderProduct}
        />
      </VStack>
    </Screen>
  );
}

export default ProductsScreen;
