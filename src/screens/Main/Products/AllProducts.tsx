import { VStack, Icon, Input } from 'native-base';
import { EvilIcons } from '@expo/vector-icons';
import ProductList from '../../../components/MainPage/Products/ProductList';
import TopBar from '../../../components/MainPage/TopBar';
import produtos from '../../../mock/produtos.json';

function AllProducts() {
  return (
    <VStack p={6} flex={1} space={6}>
      <TopBar />
      <Input
        w="full"
        rounded="2xl"
        placeholder="Pesquisar produto"
        fontSize="md"
        bgColor="white"
        InputLeftElement={
          <Icon as={EvilIcons} name="search" color="gray.800" size={8} ml={2} />
        }
      />
      <ProductList data={produtos.aguas} title="Águas" />
    </VStack>
  );
}

export default AllProducts;
