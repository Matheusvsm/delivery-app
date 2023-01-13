import { RouteProp, useRoute } from '@react-navigation/native';
import { Heading, HStack, Image, Text, VStack } from 'native-base';
import { ProductsStackPages } from './ProductsScreen';
import produtos from '../../../mock/produtos.json';
import Screen from '../../../components/Screen';

function SingleProduct() {
  const route = useRoute<RouteProp<ProductsStackPages, 'SingleProduct'>>();

  const product = produtos.aguas.find(
    (produto) => produto.id == route.params.productId
  );

  return (
    <Screen>
      <HStack alignItems="center" bgColor="blue.500">
        <Image
          borderRadius={100}
          size="xl"
          source={{ uri: product?.icon }}
          alt={product?.name}
        />
        <Heading fontSize="lg" fontWeight="bold">
          {product?.name}
        </Heading>
      </HStack>
      <VStack></VStack>
    </Screen>
  );
}

export default SingleProduct;
