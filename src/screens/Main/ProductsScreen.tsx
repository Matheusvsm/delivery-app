import { Icon, Input, VStack } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import Screen from '../../components/Screen';
import ProductList from '../../components/MainPage/ProductList';
import produtos from '../../mock/produtos.json';

function ProductsScreen() {
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
        <ProductList data={produtos.aguas} title="Águas" />
      </VStack>
    </Screen>
  );
}

export default ProductsScreen;
